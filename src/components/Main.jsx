import RecipeList from "./RecipeList/RecipeList";

function Main({ recipes, setRecipes, handleFavourite }) {
  return (
    <>
      <RecipeList
        recipes={recipes}
        setRecipes={setRecipes}
        handleFavourite={handleFavourite}
      />
    </>
  );
}

export default Main;
