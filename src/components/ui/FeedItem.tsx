import {
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import Avatar from "./Avatar";

type FeedItemProps = {
  image?: string;
  name?: string;
  email?: string;
  text: string;
};

export default function FeedItem({ image, name, email, text }: FeedItemProps) {
  return (
    <div className="flex cursor-pointer gap-2 border-b border-blue-200 px-5 py-2 hover:bg-slate-100">
      <Avatar image="/avatar.jpg" />
      <div className="flex-1 space-y-2">
        <p>
          <span className="text-lg font-semibold">Dongjun Lee </span>
          @dongjunlee.gamil.com
        </p>
        <div>{text}</div>
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
