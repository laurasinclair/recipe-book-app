import mockRecipeList from "../../mock-data-recipe-book.json";
import RecipeList from "./RecipeList";

function Main() {
  return (
    <>
      <div className="wrapping-Container">
        <RecipeList mockRecipeList={mockRecipeList} />
      </div>
    </>
  );
}

export default Main;
