// import { useState } from "react";
// import mockRecipeList from "../../mock-data-recipe-book.json";
import "../styles/recipeCardContainer.css";
// import RecipeDetail from "./RecipeDetail";

function RecipeCard({ recipe, handleDelete }) {
  //   const handleDetailsPage = () => {
  //     <RecipeDetail recipe={recipe} />;
  //   };

  return (
    <>
      {/* <div onClick={() => handleDetailsPage()}> */}
      <div key={recipe.id} className="recipeCard-Container">
        <div className="imageWrapper">
          {recipe.easy && <span class="badge">Easy</span>}
          <img src={recipe.image}></img>
        </div>
        <h4>{recipe.name}</h4>
        <div>
          <i>Cuisine:</i>
          {recipe.category}
        </div>
        <div>
          <i>Cooking Time:</i>
          {recipe.cookTime}
        </div>
        <div>
          <i>Servings:</i>
          {recipe.servings}
        </div>

        <button
          className="deleteButton"
          onClick={() => handleDelete(recipe.id)}
        >
          🗑️
        </button>
      </div>
    </>
  );
}

export default RecipeCard;
