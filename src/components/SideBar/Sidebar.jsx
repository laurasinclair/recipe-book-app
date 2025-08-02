import "./sideBar.css";

import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <aside id="sidebar" className="sideBar-whole-container">
        <div className="sideBar-container">
          <div className="sideBar-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "selected nav-Link" : "nav-Link"
              }
            >
              View
            </NavLink>
          </div>
          <div className="sideBar-item">
            <NavLink
              to="*"
              className={({ isActive }) =>
                isActive ? "selected nav-Link" : " nav-Link"
              }
            >
              Add Recipe
            </NavLink>
          </div>
          <div className="sideBar-item">
            <NavLink
              to="/Favourites"
              className={({ isActive }) =>
                isActive ? "selected nav-Link" : "nav-Link"
              }
            >
              Favourites
            </NavLink>
          </div>
          <div className="sideBar-item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "selected nav-Link" : "nav-Link"
              }
            >
              About
            </NavLink>
          </div>
        </div>
        <div className="sideBar-item trash-link">
          <NavLink
            to="/deletedList"
            className={({ isActive }) =>
              isActive ? "selected nav-Link" : "nav-Link"
            }
          >
            🗑️ Deleted
          </NavLink>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
