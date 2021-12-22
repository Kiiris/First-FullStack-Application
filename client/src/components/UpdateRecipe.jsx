import React , {useState}from 'react';
import axios from 'axios'
const PUT_URL = 'http://localhost:3001/api/recipes/'

const UpdateRecipe = (props) => {

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

  const handleUpdateinput = (e) => {
    setRecipe({ ...newRecipe, [e.target.id]: e.target.value });
  };
  const changeRecipe = async (e) => {
    e.preventDefault()
    console.log(PUT_URL, props.match.params.id)
    //{liked:true}
    const res = await axios.put(`${PUT_URL}${props.match.params.id}`, newRecipe)
    console.log('working!',res)
    setRecipe(res.data)

} 
  return <div>
    <h1>Let's change around some stuff!</h1>
      <div className="recipeForm">
      <form>
        <input
          onChange={handleUpdateinput}
          type="text"
          value={newRecipe.food}
          placeholder="What's on the menu?"
          id="food"
        />
        <input
          onChange={handleUpdateinput}
          type="text"
          value={newRecipe.made_by}
          placeholder="Who's our lovely chef?"
          id="made_by"
        />

        <input
          onChange={handleUpdateinput}
          type="text"
          value={newRecipe.image}
          placeholder="Show a photo!"
          id="image"
        />

        <input
          onChange={handleUpdateinput}
          type="number"
          value={newRecipe.cooktime}
          placeholder="Cooktime? Min "
          id="cooktime"
        />
        <input
          onChange={handleUpdateinput}
          type="text"
          value={newRecipe.ingredients}
          placeholder="What are ingredients?"
          id="ingredients"
        />
        <input
          onChange={handleUpdateinput}
          type="text"
          value={newRecipe.review}
          placeholder="Be the first to review!"
          id="review"
        />
        <input
          onChange={handleUpdateinput}
          type="text"
          value={newRecipe.instructions}
          placeholder="How shall we prepare?"
          id="instructions"
        />
        <input
          onChange={handleUpdateinput}
          type="choice"
          value={newRecipe.details}
          placeholder="Add some lovely details"
          id="details"
        />

        <button onClick={changeRecipe}type="submit">
          Let's make some changes!
        </button>
        </form>
        </div>
  </div>;
};

export default UpdateRecipe;
