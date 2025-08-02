import "./recipeCard.css";
import { Link, useNavigate } from "react-router-dom";
function RecipeCard({
  recipe,
  handleDelete,
  handleFavourite,
  handleDeletedItems,
}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/recipe-detail/${recipe.id}`);
  };

  return (
    <>
      {/* <div onClick={handleNavigate} key={recipe.id}> */}
      {/* 👇 key should be in the parent component (where you map() something) */}
      <div onClick={handleNavigate}>
        <div className="recipeCard-Container">
          <div className="imageWrapper">
            {recipe.easy && <span className="badge">Easy</span>}
            <img src={recipe.image}></img>
            <span
              className="favourites"
              onClick={(e) => handleFavourite(e, recipe.id)}
            >
              {recipe.isFav === false ? "🤍" : "❤️"}
            </span>
          </div>
          <h2>{recipe.name}</h2>
          <div className="cookTimeDetails">
            <p className="globe">
              <span className="textName">
                <img src="/images/globe.png" />
              </span>
              {recipe.category}
            </p>
            <div className="cookingInfo">
              <p className="timerImage">
                <span className="textName">
                  <img src="/images/time.png" />
                </span>
                {recipe.cookTime}
              </p>
              <p>
                <span className="textName">Servings:&nbsp;</span>
                {recipe.servings}
              </p>
            </div>
          </div>

          <img
            className="deleteButton"
            onClick={(e) => {
              handleDeletedItems(recipe.id);
              handleDelete(e, recipe.id);
            }}
            src="/images/bin.png"
          />
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
