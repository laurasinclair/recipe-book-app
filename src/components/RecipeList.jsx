import { useState } from "react";
import RecipeCard from "./RecipeCard";
import "../styles/recipeListContainer.css";

function RecipeList({ mockRecipeList }) {
  const [recipes, setRecipes] = useState(mockRecipeList);

  const handleDelete = (recipeId) => {
    const filteredRecipeList = recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
    setRecipes(filteredRecipeList);
  };
  return (
    <>
      <div className="recipeList-Container">
        {recipes.map((recipe) => {
          return <RecipeCard recipe={recipe} handleDelete={handleDelete} />;
        })}
      </div>
    </>
  );
}

export default RecipeList;
