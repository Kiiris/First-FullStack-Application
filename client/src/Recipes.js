import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeList from './components/RecipeLists';
const BASE_URL = 'http://localhost:3001/api';

function Recipes(props) {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipes();
  }, []);
  const getRecipes = async () => {
    const res = await axios.get(`${BASE_URL}/getallrecipes`);
    setRecipes(res.data.recipes);
    console.log(res.data.recipes);
  };

  return (
    <div>
      <h1>Recipes go here</h1>
      <section className="recipelists">
        {recipes.map((e) => (
          <RecipeList
            food={e.food}
            details={e.details}
            review={e.review}
            {...e}
            onClick={() => props.history.push(`/recipe/${e._id}`)}
          />
        ))}
      </section>
    </div>
  );
}

export default Recipes;
