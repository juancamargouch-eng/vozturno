import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyJWT } from '@/lib/auth';

// Rutas que requieren autenticación
const PROTECTED_ROUTES = ['/admin', '/clinic', '/admission', '/point-of-care', '/public-display'];

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Obtener token de la cookie
    const token = request.cookies.get('auth_token')?.value;

    // Verificar si la ruta es protegida
    const isProtectedRoute = PROTECTED_ROUTES.some(route => pathname.startsWith(route));

    if (isProtectedRoute) {
        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        const payload = await verifyJWT(token);
        if (!payload) {
            const response = NextResponse.redirect(new URL('/login', request.url));
            response.cookies.delete('auth_token');
            return response;
        }

        // Validación de Roles por Ruta
        if (pathname.startsWith('/admin') && payload.role !== 'SUPER_ADMIN') {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        if ((pathname.startsWith('/clinic') || pathname.startsWith('/admission')) &&
            !['CLINIC_ADMIN', 'STAFF', 'SUPER_ADMIN'].includes(payload.role as string)) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    // Redirigir desde la raíz basado en autenticación
    if (pathname === '/') {
        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
        const payload = await verifyJWT(token);
        if (payload) {
            if (payload.role === 'SUPER_ADMIN') return NextResponse.redirect(new URL('/admin/dashboard', request.url));
            return NextResponse.redirect(new URL('/clinic/dashboard', request.url));
        } else {
            const response = NextResponse.redirect(new URL('/login', request.url));
            response.cookies.delete('auth_token');
            return response;
        }
    }

    // Redirigir fuera de login si ya está autenticado
    if (pathname === '/login' && token) {
        const payload = await verifyJWT(token);
        if (payload) {
            if (payload.role === 'SUPER_ADMIN') return NextResponse.redirect(new URL('/admin/dashboard', request.url));
            return NextResponse.redirect(new URL('/clinic/dashboard', request.url));
        }
    }

    return NextResponse.next();
}

// Configurar en qué rutas se ejecuta el middleware
export const config = {
    matcher: [
        '/',
        '/admin/:path*',
        '/clinic/:path*',
        '/admission/:path*',
        '/point-of-care/:path*',
        '/public-display/:path*',
        '/login'
    ],
};
