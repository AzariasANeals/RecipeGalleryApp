import React from "react";

const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"],
      image: "/images/classic-spaghetti-carbonara.webp",
    },
    {
      id: 2,
      title: "Chicken Alfredo",
      ingredients: ["Chicken", "Pasta", "Alfredo Sauce", "Parmesan"],
      image: "images/chicken-alfredo.jpg",
    },
    {
      id: 3,
      title: "Margherita Pizza",
      ingredients: ["Dough", "Tomato Sauce", "Mozzarella", "Basil"],
      image: "images/margherita-pizza.jpg",
    },
  ];

const RecipeGallery = () => {
  return (
    <div className="gallery">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <img src={recipe.image} alt={recipe.title} className="recipe-image" />
          <h2>{recipe.title}</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RecipeGallery;
