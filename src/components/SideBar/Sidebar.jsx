import styles from "./SideBar.module.css";

import { NavLink } from "react-router-dom";

const navLinks = [
	{ name: "Home", url: "/" },
	{ name: "Add Recipe", url: "/add-recipe" },
	{ name: "Favourites", url: "/favourites" },
	{ name: "About", url: "/about" },
];

function Sidebar() {
  return (
		<>
			<aside id={styles.sidebar} className={styles.sideBarWholeContainer}>
				<div className={styles.sideBarContainer}>

          {/* As all the elements are the same, this could be a mapped list: */}
					{navLinks.map((link) => {
						return (
							<div className={styles.sideBarItem}>
								<NavLink
									to={link.url}
                  
                  // 👇 This if perfectly fine, but you can look into the npm package "classnames" for situations like that. 
                  // It allows you to apply classes based on conditions, it would be perfect here!
                  // className={classNames(
                  //   styles.navLink, 
                  //   { [styles.selected]: isActive })
                  // }
									className={({ isActive }) =>
										isActive
											? `${styles.selected} ${styles.navLink}`
											: `${styles.navLink}`
									}
								>
									{link.name}
								</NavLink>
							</div>
						);
					})}
					
          {/* <div className={styles.sideBarItem}>
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
					</div> */}
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
