import Feed from "../components/ui/Feed";
import Sidebar from "../components/ui/Sidebar";
import Widget from "../components/ui/Widget";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Feed className="flex-1" />
      <Widget className="hidden lg:block" />
    </div>
  );
};

export default Home;
