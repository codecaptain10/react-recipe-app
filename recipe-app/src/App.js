import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const APP_ID = "6fda908f";
  const APP_KEY = "cd9b902f74d0f14abc1c21fd9b85244f";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className='App'>
      <form className='search-form'>
        <input className='search=bar' type='text' />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
