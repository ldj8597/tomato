import Avatar from "./Avatar";
import clsx from "clsx";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

export default function ProfileMini() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession({ required: true });

  return (
    <div
      onClick={() => setOpen((prev) => !prev)}
      className="relative flex cursor-pointer items-center justify-center rounded-full px-2 py-2 hover:bg-slate-100 lg:aspect-auto lg:justify-between lg:px-3"
    >
      <div className="flex items-center gap-2">
        <Avatar image={session?.user?.image} />
        <div className="hidden flex-col items-start lg:flex">
          <p className="font-bold">{session?.user?.name}</p>
          <p className="text-sm">@{session?.user?.email?.split("@")[0]}</p>
        </div>
      </div>
      <div className="text-bold hidden text-lg lg:block">...</div>
      {/* Popup */}
      <div
        className={clsx(
          "absolute -top-32 -left-10 flex w-72 flex-col items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-6 shadow-md",
          {
            hidden: !open,
          }
        )}
      >
        <button>Add an existing account</button>
        <button onClick={() => signOut()}>Log out</button>
      </div>
    </div>
  );
}
