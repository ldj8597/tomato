import FeedHeader from "./FeedHeader";
import clsx from "clsx";
import FeedInput from "./FeedInput";
import FeedItem from "./FeedItem";
import { trpc } from "../../utils/trpc";

type FeedProps = {
  className?: string;
};

export default function Feed({ className }: FeedProps) {
  const postQuery = trpc.post.fromFollowing.useQuery();

  console.log(postQuery.data);
  return (
    <div
      className={clsx(
        className,
        "ml-24 flex h-[2000px] max-w-2xl flex-col border-x md:ml-40 lg:ml-80"
      )}
    >
      <FeedHeader />
      <FeedInput />
      {postQuery.data && (
        <div>
          {postQuery.data.map((post) => (
            <FeedItem key={post.id} text={post.text} />
          ))}
        </div>
      )}
    </div>
  );
}
