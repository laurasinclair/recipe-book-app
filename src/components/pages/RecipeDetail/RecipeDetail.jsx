import { Link, useParams } from "react-router-dom";
import "./recipeDetail.css";

function RecipeDetail({ recipes, setTitle }) {
  const { recipeId } = useParams();
  const recipe = recipes.find((oneRecipe) => {
    return oneRecipe.id == recipeId;
  });
  setTitle(recipe.name);
  return (
    <>
      <div className="recipeDetailGridContainer">
        <div id="recipeDetailC1" className="recipeDetail-container1">
          <img src={recipe.image}></img>
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
        </div>

        <div id="recipeDetailC2" className="recipeDetail-container2">
          <h2>Ingredients:</h2>
          <ul>
            {recipe.ingredients.map((ingredient, i) => {
              return <li key={`${ingredient}_${i}`}>{ingredient}</li>;
            })}
          </ul>

          <h2>Instructions</h2>
          <ol>
            {recipe.instructions.map((instruction, i) => {
              return <li key={`${instruction}_${i}`}>{instruction}</li>;
            })}
          </ol>

          <Link to="/" className="button-Container">
            <button class="homeBtn">Home</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default RecipeDetail;
