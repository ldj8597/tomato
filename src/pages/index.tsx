import Feed from "../components/ui/Feed";
import Sidebar from "../components/ui/Sidebar";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Feed className="flex-1" />
      <div>Widget</div>
    </div>
  );
};

export default Home;
