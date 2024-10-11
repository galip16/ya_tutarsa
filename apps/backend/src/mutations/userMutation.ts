import prisma from "../../prisma";

export const userMutation = {
  createUser: async (_: any, args: { name: string; email: string }) => {
    return await prisma.user.create({
      data: {
        id:"1",
        name: args.name,
        email:args.email
      },
    });
  },
};
