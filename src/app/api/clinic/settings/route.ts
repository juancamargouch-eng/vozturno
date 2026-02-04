import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const clinicId = searchParams.get('clinicId');

        if (!clinicId) {
            return NextResponse.json({ error: 'ClinicId es requerido' }, { status: 400 });
        }

        const clinic = await prisma.clinic.findUnique({
            where: { id: clinicId },
            select: { voiceConfig: true, name: true, active: true }
        });

        return NextResponse.json(clinic);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PATCH(request: Request) {
    try {
        const { clinicId, voiceConfig } = await request.json();

        if (!clinicId) {
            return NextResponse.json({ error: 'ClinicId es requerido' }, { status: 400 });
        }

        const clinic = await prisma.clinic.update({
            where: { id: clinicId },
            data: { voiceConfig }
        });

        return NextResponse.json(clinic);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
