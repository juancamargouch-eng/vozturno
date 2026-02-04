import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const cookieStore = await cookies();
        const userEmail = cookieStore.get('user_email')?.value;

        if (!userEmail) {
            return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
        }

        const user = await prisma.user.findUnique({
            where: { email: userEmail },
            include: {
                areas: true,
                clinic: true
            }
        });

        if (!user) {
            return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
        }

        // No devolver el password
        const { password, ...userWithoutPassword } = user;
        return NextResponse.json(userWithoutPassword);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
