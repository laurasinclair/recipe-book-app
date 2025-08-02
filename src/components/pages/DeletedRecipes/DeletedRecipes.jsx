import "./deletedRecipe.css";
function DeletedRecipes({ deletedList, handleAddDeletedItem, setTitle }) {
  setTitle("Deleted Recipes");
  return (
    <>
      {deletedList.length === 0 && (
        <p className="emptyList"> The list is Empty</p>
      )}
      <div className="deletedListContainer">
        {deletedList.map((recipe) => {
          return (
            <div className="delete-recipeCard-Container" key={recipe.id}>
              <div className="imageWrapper">
                <img src={recipe.image} />
              </div>
              <h2>{recipe.name}</h2>

              <div className="cookTimeDetails">
                <p className="globe">
                  <span className="textName">
                    <img src="/images/globe.png" />
                  </span>
                  {recipe.category}
                </p>
                <div className="cookingInfo">
                  <p className="timerImage">
                    <span className="textName">
                      <img src="/images/time.png" />
                    </span>
                    {recipe.cookTime}
                  </p>
                  <p>
                    <span className="textName">Servings:&nbsp;</span>
                    {recipe.servings}
                  </p>
                </div>
              </div>

              <img
                className="addButton"
                onClick={() => {
                  handleAddDeletedItem(recipe);
                }}
                src="/images/plus.png"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DeletedRecipes;
