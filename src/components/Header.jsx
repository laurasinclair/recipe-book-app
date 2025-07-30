import recipeBookLogo from "../assets/recipe-book-logo.png";

function Header() {
  return (
    <>
      <header>
        <div className="headerComponent">
          <div>Recipe-Book</div>
          <img src={recipeBookLogo} />
        </div>
      </header>
    </>
  );
}

export default Header;
