import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const clinics = await prisma.clinic.findMany({
            include: {
                _count: {
                    select: { users: true, turnos: true }
                }
            },
            orderBy: { createdAt: 'desc' }
        });

        // Mapeamos para que la UI reciba lo que espera
        const formattedClinics = clinics.map(c => ({
            id: c.id,
            name: c.name,
            slug: c.slug,
            active: c.active,
            address: c.address || 'Sin dirección',
            createdAt: c.createdAt.toISOString().split('T')[0],
            usersCount: c._count.users,
            turnosCount: c._count.turnos
        }));

        return NextResponse.json(formattedClinics);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Error desconocido';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const { name, slug, address } = await request.json();

        const clinic = await prisma.clinic.create({
            data: {
                name,
                slug: slug.toLowerCase().replace(/\s+/g, '-'),
                address
            }
        });

        return NextResponse.json(clinic, { status: 201 });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Error desconocido';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function PATCH(request: Request) {
    try {
        const body = await request.json();
        const { id, active, name, address } = body;

        if (!id) {
            return NextResponse.json({ error: 'ID de clínica es requerido' }, { status: 400 });
        }

        const updateData: Record<string, string | boolean> = {};
        if (active !== undefined) updateData.active = active;
        if (name) updateData.name = name;
        if (address) updateData.address = address;

        const clinic = await prisma.clinic.update({
            where: { id },
            data: updateData
        });

        return NextResponse.json(clinic);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Error desconocido';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
