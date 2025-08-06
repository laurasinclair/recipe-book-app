import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/Sidebar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main";
import mockRecipeList from "../mock-data-recipe-book.json";
import RecipeDetail from "./components/pages/RecipeDetail/RecipeDetail";
import AddRecipe from "./components/pages/AddRecipe/AddRecipe";
import About from "./components/pages/About/About";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";
import Favourite from "./components/pages/Favourites/Favourites";
import DeletedRecipes from "./components/pages/DeletedRecipes/DeletedRecipes";

function App() {
  const [recipes, setRecipes] = useState(mockRecipeList);
  const [deletedList, setDeletedList] = useState([]);
  const [title, setTitle] = useState("Homepage");

  const addNewRecipe = (newRecipe) => {
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);
  };

  const handleFavourite = (e, id) => {
    e.stopPropagation();
    const newRecipeList = recipes.map((oneRecipe) => {
      if (oneRecipe.id === id) {
        if (oneRecipe.isFav === false) {
          oneRecipe.isFav = true;
        } else {
          oneRecipe.isFav = false;
        }
      }
      return oneRecipe;
    });

    setRecipes(newRecipeList);
  };

  const handleDeletedItems = (recipeId) => {
    const deletedItem = recipes.find((recipe) => {
      return recipe.id === recipeId;
    });
    setDeletedList([...deletedList, deletedItem]);
    console.log(deletedList);
  };
  const handleAddDeletedItem = (deletedItem) => {
    setRecipes([...recipes, deletedItem]);
    const filteredRecipeList = deletedList.filter((recipe) => {
      return recipe.id !== deletedItem.id;
    });
    setDeletedList(filteredRecipeList);
  };
  const addEditedRecipe = (editedRecipe) => {
    const filteredRecipe = recipes.filter((recipe) => {
      return recipe.id !== editedRecipe.id;
    });
    setRecipes([...filteredRecipe, editedRecipe]);
  };
  return (
    <>
       {/*<Header title={title}></Header> 👉 this syntax works, but it's good practice to use self-closing tags if the component doesn't have children */}
      <Header title={title} />

      <div className="mainComponent-container">
        <Sidebar></Sidebar>

        {/* 👇 it will be easier to control this section's layout if it has its own div */}
        <div id="main" className="mainContent">
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  recipes={recipes}
                  setRecipes={setRecipes}
                  handleFavourite={handleFavourite}
                  handleDeletedItems={handleDeletedItems}
                  setTitle={setTitle}
                />
              }
            />
            <Route
              path="/recipe-detail/:recipeId"
              element={<RecipeDetail recipes={recipes} setTitle={setTitle} />}
            />
            <Route
              path="/favourites"
              element={<Favourite recipes={recipes} setTitle={setTitle} />}
            />
            <Route
              path="/add-recipe"
              element={
                <AddRecipe
                  isEdit={false}
                  setTitle={setTitle}
                  addNewRecipe={addNewRecipe}
                />
              }
            />
            <Route
              path="/edit-recipe/:recipeId"
              element={
                <AddRecipe
                  setTitle={setTitle}
                  isEdit={true}
                  addEditedRecipe={addEditedRecipe}
                  recipes={recipes}
                />
              }
            />
            <Route path="/about" element={<About setTitle={setTitle} />} />
            <Route
              path="/deletedList"
              element={
                <DeletedRecipes
                  deletedList={deletedList}
                  handleAddDeletedItem={handleAddDeletedItem}
                  setTitle={setTitle}
                />
              }
            />
            <Route path="*" element={<ErrorPage setTitle={setTitle} />} />
          </Routes>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
