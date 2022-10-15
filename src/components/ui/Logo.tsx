import Image from "next/future/image";
import Link from "next/link";
import clsx from "clsx";

type LogoProps = {
  link?: boolean;
  className?: string;
};

export default function Logo({ link, className }: LogoProps) {
  if (link) {
    return (
      <Link href="/">
        <a className={clsx("logo", className)}>
          <Image src="/logo.png" alt="twitter logo" width={29} height={23} />
        </a>
      </Link>
    );
  } else {
    return (
      <div className={clsx("logo relative", className)}>
        <Image
          src="/logo.png"
          alt="twitter logo"
          fill
          className="object-contain"
        />
      </div>
    );
  }
}
