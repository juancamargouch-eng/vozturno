import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { hashPassword } from '@/lib/auth';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const clinicId = searchParams.get('clinicId');

    if (!clinicId) return NextResponse.json({ error: 'Missing clinicId' }, { status: 400 });

    try {
        const users = await prisma.user.findMany({
            where: { clinicId, role: 'STAFF' },
            include: { areas: true },
            orderBy: { name: 'asc' }
        });
        return NextResponse.json(users);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Error desconocido';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const { clinicId, name, email, password, areasIds } = await request.json();

        const hashedPassword = await hashPassword(password);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: 'STAFF',
                clinicId,
                areas: {
                    connect: areasIds.map((id: string) => ({ id }))
                }
            },
            include: { areas: true }
        });

        return NextResponse.json(user, { status: 201 });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Error desconocido';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function PATCH(request: Request) {
    try {
        const { id, name, email, password, areasIds } = await request.json();

        const updateData: Record<string, unknown> = {};
        if (name) updateData.name = name;
        if (email) updateData.email = email;
        if (password && password.trim() !== '') {
            updateData.password = await hashPassword(password);
        }

        if (areasIds) {
            updateData.areas = {
                set: areasIds.map((aid: string) => ({ id: aid }))
            };
        }

        const user = await prisma.user.update({
            where: { id },
            data: updateData,
            include: { areas: true }
        });

        return NextResponse.json(user);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Error desconocido';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
