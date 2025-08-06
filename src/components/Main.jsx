import RecipeList from "./RecipeList/RecipeList";

function Main({
  recipes,
  setRecipes,
  handleFavourite,
  handleDeletedItems,
  setTitle,
}) {
  setTitle("Home Page");
  return (
    // If you only have one element, you can get rid of the <></>
    <RecipeList
      recipes={recipes}
      setRecipes={setRecipes}
      handleFavourite={handleFavourite}
      handleDeletedItems={handleDeletedItems}
    />
  );
}

export default Main;
