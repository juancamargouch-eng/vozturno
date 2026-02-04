import { NextResponse } from 'next/server';
import { Prisma } from '@/generated/client';
import prisma from '@/lib/prisma';
import { z } from 'zod';

const turnoSchema = z.object({
    dni: z.string().min(5, "DNI muy corto").max(20, "DNI muy largo"),
    name: z.string().min(3, "Nombre muy corto").max(100, "Nombre muy largo"),
    areaId: z.string().min(1, "Área requerida"),
    clinicId: z.string().optional()
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validation = turnoSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json({
                error: 'Datos inválidos',
                details: validation.error.flatten().fieldErrors
            }, { status: 400 });
        }

        const { dni, name, areaId, clinicId } = validation.data;

        // 1. Validar clínica
        const targetClinicId = clinicId || (await prisma.clinic.findFirst())?.id;
        if (!targetClinicId) throw new Error('No hay clínicas configuradas');

        // 2. Obtener Área y validar capacidad
        const area = await prisma.area.findUnique({
            where: { id: areaId },
            include: {
                _count: {
                    select: {
                        turnos: {
                            where: {
                                createdAt: { gte: new Date(new Date().setHours(0, 0, 0, 0)) }
                            }
                        }
                    }
                }
            }
        });

        if (!area) throw new Error('Área no encontrada');

        if (area.capacity > 0 && area._count.turnos >= area.capacity) {
            return NextResponse.json({
                error: `Capacidad máxima alcanzada: El área ${area.name} solo permite ${area.capacity} turnos por día.`
            }, { status: 403 });
        }

        // 3. Crear o buscar paciente EN ESTA CLÍNICA
        const patient = await prisma.patient.upsert({
            where: { dni_clinicId: { dni, clinicId: targetClinicId } },
            update: { name },
            create: { dni, name, clinicId: targetClinicId },
        });

        // 4. Generar número de turno para esta clínica
        // 4. Generar número de turno para esta clínica (solo conteo de HOY para el correlativo)
        const countToday = await prisma.turno.count({
            where: {
                clinicId: targetClinicId,
                createdAt: { gte: new Date(new Date().setHours(0, 0, 0, 0)) }
            }
        });
        const turnoNumber = `T-${(countToday + 1).toString().padStart(3, '0')}`;

        // 4. Crear el turno
        const turno = await prisma.turno.create({
            data: {
                number: turnoNumber,
                patientId: patient.id,
                areaId,
                clinicId: targetClinicId,
                status: 'WAITING',
            },
            include: {
                patient: true,
                area: true,
            },
        });

        return NextResponse.json(turno, { status: 201 });
    } catch (error: unknown) {
        console.error('Error creating turno:', error);
        const message = error instanceof Error ? error.message : 'Error al crear turno';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const clinicId = searchParams.get('clinicId');
        const areaId = searchParams.get('areaId');
        const allDay = searchParams.get('allDay') === 'true';

        const targetClinicId = clinicId || (await prisma.clinic.findFirst())?.id;
        if (!targetClinicId) return NextResponse.json([]);

        const where: Prisma.TurnoWhereInput = { clinicId: targetClinicId };

        // Filtro opcional por área
        if (areaId) where.areaId = areaId;

        // Por defecto, solo traer turnos de HOY para optimizar RAM y red
        if (!allDay) {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            where.createdAt = { gte: today };
        }

        const turnos = await prisma.turno.findMany({
            where,
            include: {
                patient: true,
                area: true,
            },
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(turnos);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Error al obtener turnos';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
