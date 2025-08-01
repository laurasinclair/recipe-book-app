import "./recipeCard.css";
import { Link, useNavigate } from "react-router-dom";
function RecipeCard({ recipe, handleDelete, handleFavourite }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/recipe-detail/${recipe.id}`);
  };

  return (
		<>
			{/* <div onClick={handleNavigate} key={recipe.id}> */}
			{/* 👇 key should be in the parent component (where you map() something) */}
			<div onClick={handleNavigate}>
				<div className="recipeCard-Container">
					<div className="imageWrapper">
						{recipe.easy && <span className="badge">Easy</span>}
						<img src={recipe.image}></img>
						<span
							className="favourites"
							onClick={(e) => handleFavourite(e, recipe.id)}
						>
							{recipe.isFav === false ? "🤍" : "❤️"}
						</span>
					</div>
					<h4>{recipe.name}</h4>
					<div className="cookTimeDetails">
						<p>
							<span className="textName">Cuisine:&nbsp;</span>
							{recipe.category}
						</p>
						<p>
							<span className="textName">Cooking-Time:&nbsp;</span>
							{recipe.cookTime}
						</p>
						<p>
							<span className="textName">Servings:&nbsp;</span>
							{recipe.servings}
						</p>
					</div>

					<button
						className="deleteButton"
						onClick={(e) => handleDelete(e, recipe.id)}
					>
						🗑️
					</button>
				</div>
			</div>
		</>
  );
}

export default RecipeCard;
