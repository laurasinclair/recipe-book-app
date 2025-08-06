import recipeBookLogo from "../../assets/recipe-book-logo.png";
import styles from "./Header.module.css";

function Header({ title }) {
  return (
    <>
      <header>
        <div className={styles.headerComponent}>
          <div>Recipe-Book</div>
          <div>{title}</div>
          <img src={recipeBookLogo} />
        </div>
      </header>
    </>
  );
}

export default Header;
