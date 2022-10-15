import Image from "next/future/image";
import { PhotoIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Avatar from "./Avatar";
import Link from "next/link";
import { useRouter } from "next/router";

export default function FeedInput() {
  const { data: session } = useSession({ required: true });
  const [post, setPost] = useState("");
  const router = useRouter();

  return (
    <div className="flex gap-2 border-b border-blue-200 px-5 py-2">
      <div
        onClick={() => router.push(`/${session?.user?.email?.split("@")[0]}`)}
        className="cursor-pointer"
      >
        <Avatar image={session?.user?.image} />
      </div>
      <form
        onClick={(e) => {
          e.preventDefault();
          if (!post.trim()) return;
          console.log(post);
        }}
        className="flex-1 space-y-2"
      >
        <textarea
          value={post}
          onChange={(e) => setPost(e.target.value)}
          rows={3}
          placeholder="What's happening?"
          className="w-full border-x-0 border-t-0 border-b-blue-200 placeholder:text-lg focus:ring-0"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="rounded-full p-1 hover:bg-blue-200 focus:bg-blue-200 focus:outline-none">
              <PhotoIcon className="w-5 text-blue-500" />
            </button>
            <button className="rounded-full p-1 hover:bg-blue-200 focus:bg-blue-200 focus:outline-none">
              <FaceSmileIcon className="w-5 text-blue-500" />
            </button>
          </div>
          <Button
            type="submit"
            className="text-sm"
            text="Tweet"
            disabled={post.trim() === ""}
          />
        </div>
      </form>
    </div>
  );
}
