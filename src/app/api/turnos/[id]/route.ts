import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const p = await params;
        const id = p.id;
        const { status, areaId, nextAreaId } = await request.json();

        const updateData: any = {};
        if (status) updateData.status = status;
        if (areaId) updateData.areaId = areaId;

        // Lógica de Flujo: Si se completa y hay una siguiente área, lo movemos
        if (status === 'COMPLETED') {
            const currentTurno = await prisma.turno.findUnique({
                where: { id },
                include: { area: true }
            });

            if (currentTurno?.area?.nextAreaId) {
                updateData.status = 'WAITING';
                updateData.areaId = currentTurno.area.nextAreaId;
            }
        }

        const turno = await prisma.turno.update({
            where: { id },
            data: updateData,
            include: {
                patient: true,
                area: { include: { nextArea: true } },
            },
        });

        // Registrar en el historial si se cambió de estado o de área
        await prisma.callHistory.create({
            data: {
                turnoId: id,
                areaId: turno.areaId,
                status: status || turno.status,
            },
        });

        return NextResponse.json(turno);
    } catch (error: any) {
        console.error('Error updating turno:', error);
        return NextResponse.json({
            error: 'Error al actualizar el turno',
            details: error.message,
            code: error.code
        }, { status: 500 });
    }
}
