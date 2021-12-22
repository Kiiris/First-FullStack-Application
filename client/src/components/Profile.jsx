import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FavoriteList from './FavoritesList'
const FIND_URL = 'http://localhost:3001/api/likedrecipes'


const Profile = (currentuser) => {
const [favMeals, setFavMeals] = useState([])

useEffect(() => {
    getfavMeals();
  }, []);
  const getfavMeals = async () => {
    const res = await axios.get(`${FIND_URL}`);
    setFavMeals(res.data.recipes);
    console.log(res.data.recipes);
  };


    return(
        <div>
            <h1>this is your profile page</h1>
            <h2>{currentuser.currentuser.username}</h2>
            <h3>Your favorite animal is a {currentuser.currentuser.favoriteAnimal}</h3>

            <h1>Here are your Favorite Recipes!</h1>
      <section>
        {favMeals.map((e) => (
          <FavoriteList
            food={e.food}
            details={e.details}
            review={e.review}
            {...e}
          />
        ))}
        </section>
        </div>
    )
}

export default Profile