import { Link, useParams } from "react-router-dom";
import "./recipeDetail.css";

function RecipeDetail({ mockRecipeList }) {
  const { recipeId } = useParams();
  const recipe = mockRecipeList.find((oneRecipe) => {
    return oneRecipe.id === recipeId;
  });
  return (
    <>
      <div className="recipeDetail-container">
        <img src={recipe.image}></img>
        <div className="recipe-content">
          <h1>{recipe.name}</h1>
          <div className="recipe-meta">
            <p>
              <strong>Cuisine:</strong>
              {recipe.category}
            </p>
            <p>
              <strong>Cooking Time:</strong>
              {recipe.cookTime}
            </p>
            <p>
              <strong>Servings:</strong>
              {recipe.servings}
            </p>
          </div>

          <h2>Ingredients:</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => {
              return <li>{ingredient}</li>;
            })}
          </ul>

          <h2>Instructions</h2>
          <ol>
            {recipe.instructions.map((instruction) => {
              return <li>{instruction}</li>;
            })}
          </ol>

          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default RecipeDetail;
