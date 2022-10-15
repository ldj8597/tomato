import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const userRouter = router({
  random: protectedProcedure.query(async ({ ctx }) => {
    const { session, prisma } = ctx;
    const users = await prisma.user.findMany();
    return users.filter((user) => user.id !== session.user.id);
  }),
  follow: protectedProcedure
    .input(
      z.object({
        followingId: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { session, prisma } = ctx;
      console.log(
        `${session.user.id} is trying to follow ${input.followingId}`
      );
    }),
});
