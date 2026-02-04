import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const [clinicsCount, usersCount, turnosCount] = await Promise.all([
            prisma.clinic.count(),
            prisma.user.count(),
            prisma.turno.count()
        ]);

        return NextResponse.json({
            clinicsCount,
            usersCount,
            turnosCount
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
