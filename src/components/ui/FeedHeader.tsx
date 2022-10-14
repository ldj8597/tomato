import Link from "next/link";
import { SparklesIcon } from "@heroicons/react/24/outline";

export default function FeedHeader() {
  return (
    <div className="sticky top-0 flex items-center justify-between bg-white py-5 px-5">
      <Link href="/">
        <a className="text-xl font-semibold">Home</a>
      </Link>
      <SparklesIcon className="h-9 w-9 cursor-pointer rounded-full p-2 hover:bg-slate-200" />
    </div>
  );
}
