import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { startOfDay, endOfDay } from 'date-fns';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const clinicId = searchParams.get('clinicId');

        if (!clinicId) {
            return NextResponse.json({ error: 'ClinicId es requerido' }, { status: 400 });
        }

        const today = startOfDay(new Date());
        const tomorrow = endOfDay(new Date());

        // 1. Resumen General (Hoy)
        const [todayStats, waitingCount] = await Promise.all([
            prisma.turno.findMany({
                where: {
                    clinicId,
                    createdAt: { gte: today, lte: tomorrow }
                },
                select: {
                    status: true,
                    createdAt: true,
                    updatedAt: true
                }
            }),
            prisma.turno.count({
                where: {
                    clinicId,
                    status: 'WAITING'
                }
            })
        ]);

        const totalToday = todayStats.length;
        const attendedToday = todayStats.filter(t => t.status === 'COMPLETED' || t.status === 'CALLED' || t.status === 'IN_PROGRESS').length;

        // 2. Tiempo de Espera Promedio (Hoy)
        const calledTurnos = todayStats.filter(t =>
            (t.status === 'CALLED' || t.status === 'IN_PROGRESS' || t.status === 'COMPLETED') &&
            t.updatedAt > t.createdAt
        );

        const totalWaitTime = calledTurnos.reduce((acc, t) => {
            return acc + (t.updatedAt.getTime() - t.createdAt.getTime());
        }, 0);

        const avgWaitTimeMinutes = calledTurnos.length > 0
            ? Math.round((totalWaitTime / calledTurnos.length) / 60000)
            : 0;

        // 3. Distribución por Áreas
        const areasStats = await prisma.area.findMany({
            where: { clinicId },
            select: {
                name: true,
                _count: {
                    select: {
                        turnos: {
                            where: {
                                createdAt: { gte: today, lte: tomorrow }
                            }
                        }
                    }
                }
            }
        });

        // 4. Curva de Demanda (Por horas)
        const hourlyData = Array.from({ length: 24 }, (_, i) => ({ hour: `${i}:00`, count: 0 }));
        todayStats.forEach(t => {
            const hour = t.createdAt.getHours();
            hourlyData[hour].count++;
        });

        return NextResponse.json({
            summary: {
                totalToday,
                attendedToday,
                waitingCount,
                avgWaitTimeMinutes
            },
            areas: areasStats.map(a => ({
                name: a.name,
                count: a._count.turnos
            })),
            hourlyDemand: hourlyData.filter(h => h.count > 0 || (parseInt(h.hour) > 7 && parseInt(h.hour) < 20))
        });
    } catch (error: any) {
        console.error("Error en API de Estadísticas:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
