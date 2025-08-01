import { Link } from "react-router-dom";
import "./favourites.css";
function Favourite({ recipes }) {
  return (
    <>
      <div className="favourites-container">
        {recipes
          .filter((oneRecipe) => oneRecipe.isFav === true)
          .map((oneRecipe) => {
            return (
              <div className="favouriteCard" key={oneRecipe.id}>
                <img src={oneRecipe.image} />
                <div>{oneRecipe.name}</div>
                <div>
                  <strong>Cuisine:</strong>
                  {oneRecipe.category}
                </div>
                <div>
                  <strong>Cooking Time:</strong>
                  {oneRecipe.cookTime}
                </div>
                <div>
                  <strong>Servings:</strong>
                  {oneRecipe.servings}
                </div>
                <Link to="/">
                  <button>Home</button>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Favourite;
