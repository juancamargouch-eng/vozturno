import { NextResponse } from 'next/server';

export async function POST() {
    const response = NextResponse.json({ success: true });

    // Eliminar cookies
    response.cookies.set('auth_token', '', { path: '/', maxAge: 0 });
    response.cookies.set('user_role', '', { path: '/', maxAge: 0 });
    response.cookies.set('user_email', '', { path: '/', maxAge: 0 });
    response.cookies.set('clinic_id', '', { path: '/', maxAge: 0 });

    return response;
}
