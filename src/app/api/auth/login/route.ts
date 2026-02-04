import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { comparePassword, signJWT } from '@/lib/auth';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        // Buscar usuario
        const user = await prisma.user.findUnique({
            where: { email },
            include: { clinic: true }
        });

        if (!user || !(await comparePassword(password, user.password))) {
            return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
        }

        // Si es Staff o Clinic Admin, verificar que la sede esté activa
        if (user.role !== 'SUPER_ADMIN' && user.clinic && !user.clinic.active) {
            return NextResponse.json({ error: 'Sede Suspendida: Contacte con el administrador central' }, { status: 403 });
        }

        // Generar Token JWT
        const token = await signJWT({
            id: user.id,
            email: user.email,
            role: user.role,
            clinicId: user.clinicId
        });

        const response = NextResponse.json({
            success: true,
            user: {
                name: user.name,
                role: user.role,
                clinicName: user.clinic?.name
            }
        });

        // Establecer Cookie de Autenticación Segura
        response.cookies.set('auth_token', token, {
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 // 1 día
        });

        // Cookies auxiliares (no críticas) para la UI
        response.cookies.set('user_role', user.role, { path: '/', maxAge: 60 * 60 * 24 });
        response.cookies.set('user_email', user.email, { path: '/', maxAge: 60 * 60 * 24 });
        if (user.clinicId) {
            response.cookies.set('clinic_id', user.clinicId, { path: '/', maxAge: 60 * 60 * 24 });
        }

        return response;
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Error en login';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
