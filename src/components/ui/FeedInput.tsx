import Image from "next/future/image";
import { PhotoIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import { useState } from "react";

export default function FeedInput() {
  const [post, setPost] = useState("");

  return (
    <div className="flex gap-2 border-b border-blue-200 px-5 py-2">
      <Image
        className="h-12 w-12 rounded-full"
        src="/avatar.jpg"
        alt=""
        width={48}
        height={48}
      />
      <div className="flex-1 space-y-2">
        <textarea
          value={post}
          onChange={(e) => setPost(e.target.value)}
          rows={3}
          placeholder="What's happening?"
          className="w-full border-x-0 border-t-0 border-b-blue-200"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PhotoIcon className="w-6 text-blue-500" />
            <FaceSmileIcon className="w-6 text-blue-500" />
          </div>
          <Button
            className="text-sm"
            text="Tweet"
            disabled={post.trim() === ""}
          />
        </div>
      </div>
    </div>
  );
}
