import News from "./News";
import RandomUser from "./RandomUser";
import SearchBar from "./SearchBar";
import clsx from "clsx";

type WidgetProps = {
  className?: string;
};

export default function Widget({ className }: WidgetProps) {
  return (
    <div
      className={clsx("flex w-96 flex-col space-y-5 border-r px-5", className)}
    >
      <SearchBar />
      <News />
      <RandomUser />
    </div>
  );
}
