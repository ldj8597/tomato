import { useSession } from "next-auth/react";
import Feed from "../components/ui/Feed";
import Logo from "../components/ui/Logo";
import Sidebar from "../components/ui/Sidebar";
import Widget from "../components/ui/Widget";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  const { data: session, status } = useSession({
    required: true,
  });

  if (status === "loading") {
    return (
      <div className="mx-auto max-w-xl py-10">
        <Logo className="h-12 w-12" />
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar />
      <Feed className="flex-1" />
      <Widget className="hidden lg:block" />
    </div>
  );
};

export default Home;
