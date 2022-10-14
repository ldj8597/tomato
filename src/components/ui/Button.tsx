import clsx from "clsx";
import { SVGProps } from "react";

type ButtonProps = {
  className?: string;
  text: string;
  onClick?: () => void;
  [key: string]: any;
  Icon?: (
    props: SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  ) => JSX.Element;
};

export default function Button({
  className,
  text,
  onClick,
  Icon,
  ...rest
}: ButtonProps) {
  if (!Icon) {
    return (
      <button onClick={onClick} className={clsx("btn", className)} {...rest}>
        {text}
      </button>
    );
  }

  return (
    <>
      <button
        onClick={onClick}
        className={clsx("btn hidden lg:block", className)}
        {...rest}
      >
        {text}
      </button>
      <button className="rounded-full bg-blue-500 p-2 text-white lg:hidden">
        <Icon className="w-7" />
      </button>
    </>
  );
}
