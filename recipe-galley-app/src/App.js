//import logo from './logo.svg';
import './App.css';
import React from 'react';
import RecipeGallery
 from './components/RecipeGallery';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Recipe Gallery</h1>
       <RecipeGallery/>
      </header>
    </div>
  );
}

export default App;

//         <img src={logo} className="App-logo" alt="logo" />
