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
    <>
      <RecipeList
        recipes={recipes}
        setRecipes={setRecipes}
        handleFavourite={handleFavourite}
        handleDeletedItems={handleDeletedItems}
      />
    </>
  );
}

export default Main;
