import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const clinicId = searchParams.get('clinicId');

    try {
        const clinic = clinicId
            ? { id: clinicId }
            : await prisma.clinic.findFirst();

        if (!clinic) return NextResponse.json([]);

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const areas = await prisma.area.findMany({
            where: { clinicId: clinic.id },
            include: {
                nextArea: true,
                _count: {
                    select: {
                        turnos: {
                            where: {
                                createdAt: {
                                    gte: today
                                }
                            }
                        }
                    }
                }
            },
            orderBy: { order: 'asc' },
        });
        return NextResponse.json(areas);
    } catch (error) {
        return NextResponse.json({ error: 'Error al obtener áreas' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const { clinicId, name, description, order, nextAreaId, capacity } = await request.json();

        const area = await prisma.area.create({
            data: {
                name,
                description,
                order,
                clinicId,
                nextAreaId,
                capacity: capacity ? parseInt(capacity.toString()) : 0
            }
        });

        return NextResponse.json(area, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PATCH(request: Request) {
    try {
        const { id, nextAreaId, name, description, capacity } = await request.json();

        const data: any = {};
        if (nextAreaId !== undefined) data.nextAreaId = nextAreaId;
        if (name !== undefined) data.name = name;
        if (description !== undefined) data.description = description;
        if (capacity !== undefined) data.capacity = parseInt(capacity.toString());

        const area = await prisma.area.update({
            where: { id },
            data
        });
        return NextResponse.json(area);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
