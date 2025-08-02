import { useState } from "react";
import "./addRecipe.css";

function AddRecipe({ setTitle, addNewRecipe }) {
  setTitle("Add Recipe");
  const [formData, setFormData] = useState({
    id: Math.round(Math.random() * 200 + 200),
    name: "",
    category: "",
    cookTime: "",
    servings: "",
    ingredients: "",
    instructions: "",
    image: "/images/defaultDish.png",
    easy: false,
    isFav: false,
  });

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
    addNewRecipe(recipe);
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
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="form-container">
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
          <div className="difficultyCheckbox">
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
