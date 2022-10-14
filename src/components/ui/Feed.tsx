import FeedHeader from "./FeedHeader";
import clsx from "clsx";
import FeedInput from "./FeedInput";
import FeedItem from "./FeedItem";

type FeedProps = {
  className?: string;
};

export default function Feed({ className }: FeedProps) {
  return (
    <div
      className={clsx(
        className,
        "ml-24 flex h-[2000px] max-w-2xl flex-col border-x md:ml-40 lg:ml-80"
      )}
    >
      <FeedHeader />
      <FeedInput />
      <FeedItem />
    </div>
  );
}
