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
    <h1>Think you can do it better hot shot?</h1>
      <div>
      <form className="recipeForm">
        <input className="updaterecipe"
          onChange={handleUpdateinput}
          type="text"
          value={newRecipe.food}
          placeholder="What's on the menu?"
          id="food"
          size="100"
        />
        <input className="updaterecipe"
          onChange={handleUpdateinput}
          type="text"
          value={newRecipe.made_by}
          placeholder="Who's our lovely chef?"
          id="made_by"
          size="100"
        />

        <input className="updaterecipe"
          onChange={handleUpdateinput}
          type="search"
          value={newRecipe.image}
          placeholder="Show a photo! (url)"
          id="image"
          size="100"
        />

        <input className="updaterecipe"
          onChange={handleUpdateinput}
          type="number"
          value={newRecipe.cooktime}
          placeholder="Cooktime? Min "
          id="cooktime"
          size="100"
        />
        <textarea className="updaterecipe"
          onChange={handleUpdateinput}
          type="text"
          value={newRecipe.ingredients}
          placeholder="What are the ingredients?"
          size="100"
          id="ingredients"
        />
        <textarea className="updaterecipe"
          onChange={handleUpdateinput}
          type="text"
          value={newRecipe.instructions}
          placeholder="How shall we prepare?"
          id="instructions"
          size="300"
        />
        <input className="updaterecipe"
          onChange={handleUpdateinput}
          type="text"
          value={newRecipe.review}
          placeholder="Write your own impressions!"
          id="review"
          size="100"
        />
        <input className="updaterecipe"
          onChange={handleUpdateinput}
          type="choice"
          value={newRecipe.details}
          placeholder="Add some lovely details"
          id="details"
          size="100"
        />

        <button className="createrecipebutton" onClick={changeRecipe}type="submit">
        <img src={'https://i.etsystatic.com/17857814/r/il/ffa60b/1602328778/il_1588xN.1602328778_4r6m.jpg'}/>
        </button>
        </form>
        </div>
  </div>;
};

export default UpdateRecipe;
