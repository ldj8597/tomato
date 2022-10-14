import Image from "next/future/image";
import {
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
export default function FeedItem() {
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
        <p>
          <span className="text-lg font-semibold">Dongjun Lee </span>
          @dongjunlee.gamil.com
        </p>
        <div className="flex items-center justify-between">
          <ChatBubbleOvalLeftIcon className="w-5 text-slate-500" />
          <ArrowPathRoundedSquareIcon className="w-5 text-slate-500" />
          <HeartIcon className="w-5 text-slate-500" />
          <ShareIcon className="w-5 text-slate-500" />
        </div>
      </div>
    </div>
  );
}