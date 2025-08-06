import styles from "./SideBar.module.css";

import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <aside id={styles.sidebar} className={styles.sideBarWholeContainer}>
        <div className={styles.sideBarContainer}>
          <div className={styles.sideBarItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${styles.selected} ${styles.navLink}`
                  : `${styles.navLink}`
              }
            >
              View
            </NavLink>
          </div>
          <div className={styles.sideBarItem}>
            <NavLink
              to="/add-recipe"
              className={({ isActive }) =>
                isActive
                  ? `${styles.selected} ${styles.navLink}`
                  : `${styles.navLink}`
              }
            >
              Add Recipe
            </NavLink>
          </div>
          <div className={styles.sideBarItem}>
            <NavLink
              to="/Favourites"
              className={({ isActive }) =>
                isActive
                  ? `${styles.selected} ${styles.navLink}`
                  : `${styles.navLink}`
              }
            >
              Favourites
            </NavLink>
          </div>
          <div className={styles.sideBarItem}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? `${styles.selected} ${styles.navLink}`
                  : `${styles.navLink}`
              }
            >
              About
            </NavLink>
          </div>
        </div>
        <div className={`${styles.sideBarItem} ${styles.trashLink}`}>
          <NavLink
            to="/deletedList"
            className={({ isActive }) =>
              isActive
                ? `${styles.selected} ${styles.navLink}`
                : `${styles.navLink}`
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
