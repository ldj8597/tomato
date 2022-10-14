import Button from "../ui/Button";
import Logo from "../ui/Logo";
import Menu from "../ui/Menu";
import ProfileMini from "../ui/ProfileMini";

export default function Sidebar() {
  return (
    <div className="flex min-h-screen flex-col justify-between border-r pl-20 pr-10 pt-2 pb-5">
      <div className="flex flex-col items-start gap-3">
        <Logo />
        <Menu />
        <Button className="px-20" text="Tweet" />
      </div>
      <ProfileMini />
    </div>
  );
}
