import Image from "next/future/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <a className="flex h-12 w-12 items-center justify-center rounded-full hover:bg-blue-200">
        <Image src="/logo.png" alt="twitter logo" width={29} height={23} />
      </a>
    </Link>
  );
}
