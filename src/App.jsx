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

function App() {
  const [recipes, setRecipes] = useState(mockRecipeList);
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
  return (
    <>
      <div>
        <Header></Header>
        <div className="mainComponent-container">
          <Sidebar></Sidebar>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  recipes={recipes}
                  setRecipes={setRecipes}
                  handleFavourite={handleFavourite}
                />
              }
            />
            <Route
              path="/recipe-detail/:recipeId"
              element={<RecipeDetail mockRecipeList={mockRecipeList} />}
            />
            <Route
              path="/favourites"
              element={<Favourite recipes={recipes} />}
            />
            <Route path="/add-recipe" element={<AddRecipe />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
