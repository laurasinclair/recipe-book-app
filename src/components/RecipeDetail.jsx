function RecipeDetail({ recipe }) {
  return (
    <div key={recipe.id}>
      <img src={recipe.image} />
      <h4>{recipe.name}</h4>
      <div>
        <i>Cuisine:</i>
        {recipe.category}
      </div>
      <div>
        <i>Cooking Time:</i>
        {recipe.cookTime}
      </div>
      <div>
        <i>Servings:</i>
        {recipe.servings}
      </div>
      <div>
        <i>Ingredients :</i>
        <span>{recipe.ingredients}</span>
      </div>
      <div>
        <i>Instructions :</i>
        <span>{recipe.instructions}</span>
      </div>
    </div>
  );
}

export default RecipeDetail;
