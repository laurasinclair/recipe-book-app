import recipeBookLogo from "../../assets/recipe-book-logo.png";
import "./header.css";

function Header({ title }) {
  return (
    <>
      <header>
        <div className="headerComponent">
          <div>Recipe-Book</div>
          <div>{title}</div>
          <img src={recipeBookLogo} />
        </div>
      </header>
    </>
  );
}

export default Header;
