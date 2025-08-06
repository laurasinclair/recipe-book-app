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
                alt="Delete recipe" /* it's good practice to have an alt tag on all images - some frameworks like next won't let you skip it. Screen readers rely on this to describe images to blind people, so it should be descriptive (not a good space for marketing!) and concise (so it doesn't waste their time - there's already A LOT for a screen reader to go through on the internet) */
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DeletedRecipes;
