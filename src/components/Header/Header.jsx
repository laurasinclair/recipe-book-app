import recipeBookLogo from "../../assets/recipe-book-logo.png";
import "./header.css";

function Header() {
  return (
    <>
      <header>
        <div className="headerComponent">
          <div>Recipe-Book</div>
          <div>HomePage</div>
          <img src={recipeBookLogo} />
        </div>
      </header>
    </>
  );
}

export default Header;
