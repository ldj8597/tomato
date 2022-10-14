import clsx from "clsx";

type ButtonProps = {
  className?: string;
  text: string;
  onClick?: () => void;
};

export default function Button({ className, text, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={clsx("btn", className)}>
      {text}
    </button>
  );
}
