
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
      <div>
      <form className="recipeForm">
        <input
        className="updaterecipe"
          onChange={handleMealinput}
          type="text"
          value={newRecipe.food}
          placeholder="What's on the menu?"
          id="food"
          size="100"
        />
        <input
        className="updaterecipe"
          onChange={handleMealinput}
          type="text"
          value={newRecipe.made_by}
          placeholder="Who's our lovely chef?"
          id="made_by"
          size="100"
        />

        <input
        className="updaterecipe"
          onChange={handleMealinput}
          type="text"
          value={newRecipe.image}
          placeholder="Show a photo!"
          id="image"
          size="100"
        />

        <input
        className="updaterecipe"
          onChange={handleMealinput}
          type="number"
          value={newRecipe.cooktime}
          placeholder="How long does it take to make? min"
          id="cooktime"
          size="100"
        />
        <textarea
        className="updaterecipe"
          onChange={handleMealinput}
          type="text"
          value={newRecipe.ingredients}
          placeholder="What are ingredients?"
          id="ingredients"
          size="100"
        />
    
        <textarea
        className="updaterecipe"
          onChange={handleMealinput}
          type="text"
          value={newRecipe.instructions}
          placeholder="How shall we prepare?"
          id="instructions"
          size="100"
        />
          <textarea
        className="updaterecipe"
          onChange={handleMealinput}
          type="text"
          value={newRecipe.review}
          placeholder="Add your own impressions!"
          id="review"
          size="100"
        />
        <textarea
        className="updaterecipe"
          onChange={handleMealinput}
          type="choice"
          value={newRecipe.details}
          placeholder="Add some lovely display details"
          id="details"
          size="100"
        />

        <button className="createrecipebutton" onClick={makeRecipe}type="submit">
        <img src={'https://i.etsystatic.com/17857814/r/il/ffa60b/1602328778/il_1588xN.1602328778_4r6m.jpg'}/>
        </button>
        </form>
        </div>
    </div>
  );
};

export default MakeRecipes;