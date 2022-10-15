import Image from "next/future/image";
import { UserIcon } from "@heroicons/react/24/outline";

type AvatarProps = {
  image: string | null | undefined;
};

export default function Avatar({ image }: AvatarProps) {
  if (!image) {
    return <UserIcon className="h-9 w-9 rounded-full bg-slate-100 p-1" />;
  }
  return (
    <Image
      className="h-9 w-9 rounded-full"
      src={image}
      alt=""
      width={48}
      height={48}
    />
  );
}
