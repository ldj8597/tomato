import Image from "next/future/image";

type AvatarProps = {
  image: string;
};

export default function Avatar({ image }: AvatarProps) {
  return (
    <Image
      className="h-12 w-12 rounded-full"
      src={image}
      alt=""
      width={48}
      height={48}
    />
  );
}
