import { PrismaClient } from '../src/generated/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

/**
 * Script de inicialización mínima.
 * SOLO debe contener datos globales del sistema que no cambian.
 * Las sedes y sus administradores se gestionan desde el Panel de Super Admin.
 */
async function main() {
    console.log('--- INICIALIZACIÓN BASE VOZTURNO ---');

    // 1. Único usuario obligatorio: Super Administrador Maestro
    // Estas credenciales permiten entrar al sistema por primera vez para crear sedes.
    await prisma.user.upsert({
        where: { email: 'admin@vozturno.com' },
        update: {}, // No sobreescribir si ya existe
        create: {
            email: 'admin@vozturno.com',
            password: bcrypt.hashSync('admin', 10),
            name: 'Carlos SuperAdmin',
            role: 'SUPER_ADMIN'
        }
    })

    console.log('Seed: Super Administrador base listo.');
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
