import RecipeCard from "../RecipeCard/RecipeCard";
import "./recipeList.css";

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
      <div className="recipeList-Container">
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
