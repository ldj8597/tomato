import Sidebar from "../components/layout/Sidebar";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">Feed</div>
      <div>Widget</div>
    </div>
  );
};

export default Home;
