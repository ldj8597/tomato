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
      const exists = await prisma.follows.findUnique({
        where: {
          followerId_followingId: {
            followerId: session.user.id,
            followingId: input.followingId,
          },
        },
      });
      if (exists) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Already followed",
        });
      }
      const follows = await prisma.follows.create({
        data: {
          followerId: session.user.id,
          followingId: input.followingId,
        },
      });
      return follows;
    }),
});
