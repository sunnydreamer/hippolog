import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <Outlet />
    </div>
  );
};
export default Home;
