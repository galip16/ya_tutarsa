import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const matchQuery = {
    matches: async () => {
        return await prisma.match.findMany();
    },
    match: async (_: any, args: { id: number }) => {
        return await prisma.match.findUnique({ where: { id: args.id } });
    },
};
