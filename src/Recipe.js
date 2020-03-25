import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, allergens, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img className={style.image} src={image} alt="" />
      <h4>{Math.floor(calories)} Calories</h4>
      <p>Safety: {allergens}</p>
      <ol className={style.ingredients}>
      INGREDIENTS
      <p>
        {ingredients.map(ingredient => (<ol>{ingredient.text}</ol>))}
        </p>
      </ol>
    </div>
  );
};

export default Recipe;
