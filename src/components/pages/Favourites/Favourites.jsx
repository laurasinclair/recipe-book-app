import { Link, useNavigate } from "react-router-dom";
import "./favourites.css";
function Favourite({ recipes, setTitle }) {
  setTitle("Favourites");
  const navigate = useNavigate();
  const handleNavigate = (recipeId) => {
    navigate(`/recipe-detail/${recipeId}`);
  };
  const favouriteList = recipes.filter((oneRecipe) => oneRecipe.isFav === true);
  return (
    <>
      {favouriteList.length === 0 && (
        <p className="emptyList"> The list is Empty</p>
      )}
      <div className="wholeFavouriteList-container">
        <div className="favouritesList-container">
          {favouriteList.map((oneRecipe) => {
            return (
              <div
                className="favourites-container"
                onClick={() => handleNavigate(oneRecipe.id)}
              >
                <div className="imageWrapper" key={oneRecipe.id}>
                  <img src={oneRecipe.image} />
                </div>
                <h2>{oneRecipe.name}</h2>
                <div className="cookTimeDetails">
                  <p className="globe">
                    <span className="textName">
                      <img src="/images/globe.png" />
                    </span>
                    {oneRecipe.category}
                  </p>
                  <div className="cookingInfo">
                    <p className="timerImage">
                      <span className="textName">
                        <img src="/images/time.png" />
                      </span>
                      {oneRecipe.cookTime}
                    </p>
                    <p>
                      <span className="textName">Servings:&nbsp;</span>
                      {oneRecipe.servings}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <Link to="/">
          <button className="homeBtn">Home</button>
        </Link> */}
      </div>
    </>
  );
}

export default Favourite;
