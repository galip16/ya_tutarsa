import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const userQuery = {
  users: async () => {
    return await prisma.user.findMany();
  },
  user: async (_: any, args: { id: string }) => {
    return await prisma.user.findUnique({ where: { id: args.id } });
  },
};
