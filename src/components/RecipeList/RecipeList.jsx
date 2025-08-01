import RecipeCard from "../RecipeCard/RecipeCard";
// import "./recipeList.css"; // this imports it to the entire app
import styles from "./RecipeList.module.css"; // scopes it to this component

function RecipeList({ recipes, setRecipes, handleFavourite }) {
  console.log(recipes);
  const handleDelete = (e, recipeId) => {
    e.stopPropagation();
    const filteredRecipeList = recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
    setRecipes(filteredRecipeList);
  };
  return (
		<>
			<div className={styles.recipeListContainer}>
				{recipes.map((recipe) => {
					return (
						<RecipeCard
							recipe={recipe}
							handleDelete={handleDelete}
							key={recipe.id}
							recipes={recipes}
							setRecipes={setRecipes}
							handleFavourite={handleFavourite}
						/>
					);
				})}
			</div>
		</>
  );
}

export default RecipeList;
