import RecipeCard from "../RecipeCard/RecipeCard";
import Search from "../Search/Search";
import { useEffect, useState } from "react";

// import "./recipeList.css"; // this imports it to the entire app
import styles from "./RecipeList.module.css"; // scopes it to this component

function RecipeList({
  recipes,
  setRecipes,
  handleFavourite,
  handleDeletedItems,
}) {
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState([...recipes]);

  const handleDelete = (e, recipeId) => {
    e.stopPropagation();
    const filteredRecipeList = recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
    setRecipes(filteredRecipeList);
  };

  useEffect(() => {
    const searchFilterList = recipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredList(searchFilterList);
  }, [search]);

  return (
    <>
      <div className={styles.recipeListWholeContainer}>
        <Search search={search} setSearch={setSearch} />
        <div className={styles.recipeListContainer}>
          {(search.length === 0 ? recipes : filteredList).map((recipe) => {
            return (
              <RecipeCard
                recipe={recipe}
                handleDelete={handleDelete}
                key={recipe.id}
                recipes={recipes}
                setRecipes={setRecipes}
                handleFavourite={handleFavourite}
                handleDeletedItems={handleDeletedItems}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default RecipeList;
