
import React, { useState } from 'react';
import axios from 'axios'
const BASE_URL = 'http://localhost:3001/api/'



const MakeRecipes= () => {
  
  const [newRecipe, setRecipe] = useState({
    food: '',
    made_by: '',
    image: '',
    cooktime: 0,
    ingredients: '',
    review: '',
    instructions: '', 
    details: '',
    healthy: true
  });

  const handleMealinput = (e) => {
    setRecipe({ ...newRecipe, [e.target.id]: e.target.value });
  };

  const makeRecipe = async () => {
    const res = await axios.post(`${BASE_URL}/createrecipes`, newRecipe);
    setRecipe(res.data.recipe);
    console.log(res);
  };

  return (
    <div>
      <h1>Making meals out here</h1>
      <div className="recipeForm">
      <form>
        <input
          onChange={handleMealinput}
          type="text"
          value={newRecipe.food}
          placeholder="What's on the menu?"
          id="food"
        />
        <input
          onChange={handleMealinput}
          type="text"
          value={newRecipe.made_by}
          placeholder="Who's our lovely chef?"
          id="made_by"
        />

        <input
          onChange={handleMealinput}
          type="text"
          value={newRecipe.image}
          placeholder="Show a photo!"
          id="image"
        />

        <input
          onChange={handleMealinput}
          type="number"
          value={newRecipe.cooktime}
          placeholder="How long does it take to make? min"
          id="cooktime"
        />
        <input
          onChange={handleMealinput}
          type="text"
          value={newRecipe.ingredients}
          placeholder="What are ingredients?"
          id="ingredients"
        />
        <input
          onChange={handleMealinput}
          type="text"
          value={newRecipe.review}
          placeholder="Be the first to review!"
          id="review"
        />
        <input
          onChange={handleMealinput}
          type="text"
          value={newRecipe.instructions}
          placeholder="How shall we prepare?"
          id="instructions"
        />
        <input
          onChange={handleMealinput}
          type="choice"
          value={newRecipe.details}
          placeholder="Add some lovely details"
          id="details"
        />

        <button onClick={makeRecipe}type="submit">
          Lets make a meal
        </button>
        </form>
        </div>
    </div>
  );
};

export default MakeRecipes;