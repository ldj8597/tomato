import { HomeIcon, HashtagIcon } from "@heroicons/react/24/solid";
import {
  BellIcon,
  EnvelopeIcon,
  BookmarkIcon,
  ClipboardIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const links = [
  { target: "/", text: "Home", Icon: HomeIcon },
  { target: "/explore", text: "Explore", Icon: HashtagIcon },
  { target: "/notifications", text: "Notifications", Icon: BellIcon },
  { target: "/messages", text: "Messages", Icon: EnvelopeIcon },
  { target: "/bookmarks", text: "Bookmarks", Icon: BookmarkIcon },
  { target: "/lists", text: "Lists", Icon: ClipboardIcon },
  { target: "/profile", text: "Profile", Icon: UserIcon },
];

export default function Menu() {
  return (
    <div className="flex flex-col items-start gap-3">
      {links.map((link) => (
        <Link href={link.target} key={link.target}>
          <a className="flex items-center gap-2 rounded-full py-2 pl-2 pr-5 hover:bg-slate-200">
            <link.Icon className="h-8 w-8" />
            <span className="text-lg">{link.text}</span>
          </a>
        </Link>
      ))}
    </div>
  );
}
