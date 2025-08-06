import { Link, useNavigate } from "react-router-dom";
import styles from "./Favourites.module.css";
function Favourite({ recipes, setTitle }) {
  setTitle("Favourites");
  const navigate = useNavigate();
  const handleNavigate = (recipeId) => {
    navigate(`/recipe-detail/${recipeId}`);
  };
  const favouriteList = recipes.filter((oneRecipe) => oneRecipe.isFav === true);
  return (
    <>
      {favouriteList.length === 0 && (
        <p className={styles.emptyList}> The list is Empty</p>
      )}
      <div className={styles.wholeFavouriteListContainer}>
        <div className={styles.favouritesListContainer}>
          {favouriteList.map((oneRecipe) => {
            return (
              <div
                className={styles.favouritesContainer}
                onClick={() => handleNavigate(oneRecipe.id)}
              >
                <div className={styles.imageWrapper} key={oneRecipe.id}>
                  <img src={oneRecipe.image} />
                </div>
                <h2>{oneRecipe.name}</h2>
                <div className={styles.cookTimeDetails}>
                  <p className={styles.globe}>
                    <span className={styles.textName}>
                      <img src="/images/globe.png" />
                    </span>
                    {oneRecipe.category}
                  </p>
                  <div className={styles.cookingInfo}>
                    <p className={styles.timerImage}>
                      <span className={styles.textName}>
                        <img src="/images/time.png" />
                      </span>
                      {oneRecipe.cookTime}
                    </p>
                    <p>
                      <span className={styles.textName}>Servings:&nbsp;</span>
                      {oneRecipe.servings}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <Link to="/">
          <button className="homeBtn">Home</button>
        </Link> */}
      </div>
    </>
  );
}

export default Favourite;
