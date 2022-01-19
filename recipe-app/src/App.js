import React from "react";
import "./App.css";

function App() {
  const APP_ID = "6fda908f";
  const APP_KEY = "cd9b902f74d0f14abc1c21fd9b85244f";

  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className='App'>
      <h1>Hello,World!</h1>
    </div>
  );
}

export default App;
