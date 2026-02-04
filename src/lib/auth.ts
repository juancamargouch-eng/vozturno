import bcrypt from 'bcryptjs';
import * as jose from 'jose';

const getJWTSecret = () => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        if (process.env.NODE_ENV === 'production') {
            throw new Error('CRITICAL: JWT_SECRET environment variable is not defined!');
        }
        console.warn('WARNING: JWT_SECRET is not defined, using unsafe fallback for development.');
        return 'unsafe_dev_fallback_12345';
    }
    return secret;
};

const SECRET = new TextEncoder().encode(getJWTSecret());

/**
 * Hashea una contraseña usando bcryptjs.
 */
export async function hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

/**
 * Compara una contraseña en texto plano con un hash.
 */
export async function comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
}

/**
 * Firma un token JWT con los datos del usuario.
 */
export async function signJWT(payload: Record<string, unknown>): Promise<string> {
    return new jose.SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('24h')
        .sign(SECRET);
}

/**
 * Verifica un token JWT y devuelve el contenido.
 */
export async function verifyJWT(token: string) {
    try {
        const { payload } = await jose.jwtVerify(token, SECRET);
        return payload;
    } catch (error) {
        console.error('Error al verificar JWT:', error);
        return null;
    }
}
