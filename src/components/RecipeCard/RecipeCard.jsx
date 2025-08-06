import styles from "./RecipeCard.module.css";
import { Link, useNavigate } from "react-router-dom";
function RecipeCard({
  recipe,
  handleDelete,
  handleFavourite,
  handleDeletedItems,
}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/recipe-detail/${recipe.id}`);
  };

  return (
    <>
      {/* <div onClick={handleNavigate} key={recipe.id}> */}
      {/* 👇 key should be in the parent component (where you map() something) */}
      <div onClick={handleNavigate}>
        <div className={styles.recipeCardContainer}>
          <div className={styles.imageWrapper}>
            {recipe.easy && <span className={styles.badge}>Easy</span>}
            <img src={recipe.image}></img>
            <span
              className={styles.favourites}
              onClick={(e) => handleFavourite(e, recipe.id)}
            >
              {recipe.isFav === false ? "🤍" : "❤️"}
            </span>
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
            className={styles.deleteButton}
            onClick={(e) => {
              handleDeletedItems(recipe.id);
              handleDelete(e, recipe.id);
            }}
            src="/images/bin.png"
          />
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
