import { Link, useParams } from "react-router-dom";
import styles from "./RecipeDetail.module.css";

function RecipeDetail({ recipes, setTitle }) {
  const { recipeId } = useParams();
  const recipe = recipes.find((oneRecipe) => {
    return oneRecipe.id == recipeId;
  });
  setTitle(recipe.name);
  return (
    <>
      <div className={styles.recipeDetailGridContainer}>
        <div
          id={styles.recipeDetailC1}
          className={styles.recipeDetailContainer1}
        >
          <img src={recipe.image}></img>
          <h1>{recipe.name}</h1>
          <div className={styles.recipeMeta}>
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

        <div
          id={styles.recipeDetailC2}
          className={styles.recipeDetailContainer2}
        >
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
          <div className={styles.buttonContainer}>
            <Link to="/">
              <button class={styles.homeBtn}>Home</button>
            </Link>
            <Link to={`/edit-recipe/${recipeId}`}>
              <button class={styles.editBtn}>Edit</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeDetail;
