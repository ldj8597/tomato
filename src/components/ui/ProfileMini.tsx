import Avatar from "./Avatar";

export default function ProfileMini() {
  // return <Button text="Sign In" />;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <Avatar image="/avatar.jpg" />
        <div className="hidden lg:block">
          <p className="text-lg font-bold">Dongjun Lee</p>
          <p>@dongjunlee</p>
        </div>
      </div>
      <button className="text-bold hidden text-lg lg:block">...</button>
    </div>
  );
}
