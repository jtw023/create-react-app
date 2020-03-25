import React, { useEffect, useState } from 'react';
import Recipe from './Recipe.js';
import './App.css';

const App = () => {
  const APP_ID = '9eb1c4f9';
  const APP_KEY = '3931a4f52c2d9b2e6526a0045053ce62';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch('https://api.edamam.com/search?q=' + query + '&app_id=' + APP_ID + '&app_key=' + APP_KEY);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} allergens={recipe.recipe.healthLabels} ingredients={recipe.recipe.ingredients} />
      ))}
      </div>
    </div>
  );
};

export default App;
