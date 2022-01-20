import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const APP_ID = "6fda908f";
  const APP_KEY = "cd9b902f74d0f14abc1c21fd9b85244f";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className='App'>
      <form className='search-form'>
        <input className='search=bar' type='text' />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
