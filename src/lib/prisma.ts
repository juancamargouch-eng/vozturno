import { PrismaClient, Prisma } from '../generated/client'

const prismaClientSingleton = () => {
    console.log('Iniciando nueva instancia de Prisma Client...');
    return new PrismaClient()
}

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export { Prisma };
export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
