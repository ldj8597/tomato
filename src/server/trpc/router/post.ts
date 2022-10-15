import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const postRouter = router({
  fromFollowing: protectedProcedure.query(async ({ ctx }) => {
    const { session, prisma } = ctx;
    const following = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
      select: {
        following: {
          select: {
            followingId: true,
          },
        },
      },
    });
    const ids = [session.user.id];
    if (following) {
      following.following.forEach((user) => ids.push(user.followingId));
    }
    const posts = await prisma.post.findMany({
      where: {
        authorId: {
          in: ids,
        },
      },
      include: {
        author: true,
      },
    });
    return posts;
  }),
  add: protectedProcedure
    .input(
      z.object({
        text: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { session, prisma } = ctx;
      const post = await prisma.post.create({
        data: {
          text: input.text,
          authorId: session.user.id,
        },
      });
      return post;
    }),
});
