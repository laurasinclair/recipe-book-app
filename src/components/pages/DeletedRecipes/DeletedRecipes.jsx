import styles from "./DeletedRecipe.module.css";
function DeletedRecipes({ deletedList, handleAddDeletedItem, setTitle }) {
  setTitle("Deleted Recipes");
  return (
    <>
      {deletedList.length === 0 && (
        <p className={styles.emptyList}> The list is Empty</p>
      )}
      <div className={styles.deletedListContainer}>
        {deletedList.map((recipe) => {
          return (
            <div className={styles.deleteRecipeCardContainer} key={recipe.id}>
              <div className={styles.imageWrapper}>
                <img src={recipe.image} />
              </div>
              <h2>{recipe.name}</h2>

              <div className={styles.cookTimeDetails}>
                <p className={styles.globe}>
                  <span className={styles.textName}>
                    <img src="/images/globe.png" />
                  </span>
                  {recipe.category}
                </p>
                <div className={styles.cookingInfo}>
                  <p className={styles.timerImage}>
                    <span className={styles.textName}>
                      <img src="/images/time.png" />
                    </span>
                    {recipe.cookTime}
                  </p>
                  <p>
                    <span className={styles.textName}>Servings:&nbsp;</span>
                    {recipe.servings}
                  </p>
                </div>
              </div>

              <img
                className={styles.addButton}
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
