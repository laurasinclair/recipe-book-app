import { useState } from "react";
import styles from "./AddRecipe.module.css";
import { useParams, useNavigate } from "react-router-dom";

function AddRecipe({
  isEdit,
  setTitle,
  addNewRecipe,
  recipes,
  addEditedRecipe,
}) {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const oneRecipe =
    isEdit == true ? recipes.find((recipe) => recipe.id === recipeId) : null;
  setTitle("Add Recipe");
  const [formData, setFormData] = useState(
    isEdit === false
      ? {
          id: Math.round(Math.random() * 200 + 200).toString(),
          name: "",
          category: "",
          cookTime: "",
          servings: "",
          ingredients: "",
          instructions: "",
          image: "/images/defaultDish.png",
          easy: false,
          isFav: false,
        }
      : {
          ...oneRecipe,
          ingredients: oneRecipe.ingredients.join("\n"),
          instructions: oneRecipe.instructions.join("\n"),
        }
  );

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert ingredients & instructions into arrays
    const recipe = {
      ...formData,
      ingredients: formData.ingredients.split("\n").map((i) => i.trim()),
      instructions: formData.instructions.split("\n").map((i) => i.trim()),
    };
    isEdit === false ? addNewRecipe(recipe) : addEditedRecipe(recipe);
    setFormData({
      id: "",
      name: "",
      category: "",
      cookTime: "",
      servings: "",
      ingredients: "",
      instructions: "",
      image: "",
      easy: false,
      isFav: false,
    });

    isEdit === true ? navigate(`/recipe-detail/${recipe.id}`) : navigate("/");
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <label>Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
          <label>Recipe Title</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Cook Time</label>
          <input
            type="text"
            name="cookTime"
            value={formData.cookTime}
            onChange={handleChange}
            required
          />

          <label>Cuisine</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />

          <label>Servings</label>
          <input
            type="number"
            name="servings"
            value={formData.servings}
            onChange={handleChange}
          />
          <div className={styles.difficultyCheckbox}>
            <label>Is Easy?</label>
            <input
              type="checkbox"
              name="easy"
              checked={formData.easy}
              onChange={handleChange}
            />
          </div>

          <label>Ingredients (one per line)</label>
          <textarea
            name="ingredients"
            rows="4"
            value={formData.ingredients}
            onChange={handleChange}
          ></textarea>

          <label>Instructions (one step per line)</label>
          <textarea
            name="instructions"
            rows="4"
            value={formData.instructions}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Add Recipe</button>
        </form>
      </div>
    </>
  );
}
export default AddRecipe;
