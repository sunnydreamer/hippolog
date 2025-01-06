import "./Sidebar.scss";
import hippoLogo from "../../assets/hippo.svg";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, GearIcon, CalendarIcon } from "@radix-ui/react-icons";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={hippoLogo} alt="Logo" />
        <span className="logo-text">HippoLog</span>
      </div>
      <nav>
        <ul>
          <Link to="/">
            <li className={`${location.pathname === "/" ? "active" : ""}`}>
              <HomeIcon color="black" />
              Home
            </li>
          </Link>
          <Link to="/calendar">
            <li
              className={`${location.pathname === "/calendar" ? "active" : ""}`}
            >
              <CalendarIcon color="black" />
              Calendar
            </li>
          </Link>
          <Link to="/settings">
            <li
              className={`${location.pathname === "/settings" ? "active" : ""}`}
            >
              <GearIcon color="black" />
              Settings
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
