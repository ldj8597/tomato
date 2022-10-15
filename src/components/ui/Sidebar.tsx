import Button from "./Button";
import Logo from "./Logo";
import Menu from "./Menu";
import ProfileMini from "./ProfileMini";
import { PencilIcon } from "@heroicons/react/24/solid";

export default function Sidebar() {
  return (
    <div className="fixed top-0 flex h-screen flex-col justify-between pl-4  pr-10 pt-2 pb-5 md:pl-20">
      <div className="flex flex-col items-start gap-3">
        <Logo link />
        <Menu />
        <Button className="px-20" text="Tweet" Icon={PencilIcon} />
      </div>
      <ProfileMini />
    </div>
  );
}
