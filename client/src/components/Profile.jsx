import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FavoriteList from './FavoritesList'
const FIND_URL = 'http://localhost:3001/api/likedrecipes'
const PUT_URL = 'http://localhost:3001/api/profiles/'

const Profile = (currentuser) => {
const [favMeals, setFavMeals] = useState([])

const [Profile, setProfiles] = useState([]);
const [newProfile, setNewProfile] = useState({
  email: '',
  username: '',
  password: '',
  passwordConfirm: '',
  favoriteAnimal: '',
  image: '',
  description: ''
});

const inputHandler = (e) => {
  setNewProfile({ ...newProfile, [e.target.id]: e.target.value });
};

const editUser = async () => {
  const res = await axios.put(`${PUT_URL}${currentuser.currentuser._id}`, newProfile);
  setProfiles(res.data.Profile);
  console.log(res);
};

const editButton = (e) => {
  e.preventDefault();
  Profile.password === Profile.passwordConfirm
    ? setNewProfile({ ...newProfile }, editUser())
    : setNewProfile({ ...newProfile });
};
const editDescription = async (e) => {
  e.preventDefault()
  const res = await axios.put(`${PUT_URL}${currentuser.currentuser._id}`, {"description":newProfile.description})
}

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
          <h1 id="profileheader">Welcome to your profile, {currentuser.currentuser.username}</h1>
        <section className="profilelayout">
          <article>
<h2>Your Account</h2></article>
            <h1> Here are your Favorite Recipes!  </h1>
        <div className="editaccount">
        <h2 className="signin">Edit your Account!</h2>
        <h3 id='required'>Indicates a required field</h3>
        <form>
          <input
            className="editinput"
            value={newProfile.email}
            onChange={inputHandler}
            type="text"
            placeholder={currentuser.currentuser.email}
            id="email"
            size="70"
          />
          <input
            className="editinput"
            onChange={inputHandler}
            type="text"
            placeholder={currentuser.currentuser.username}
            id="username"
            size="70"
          />

          <input
            className="editinput"
            onChange={inputHandler}
            type="password"
            placeholder="Enter a new Password"
            id="password"
            size="70"
          />

          <input
            className="editinput"
            onChange={inputHandler}
            type="password"
            placeholder="Confirm your new Password"
            id="passwordConfirm"
            size="70"
          />
          <input
            className="editinput"
            onChange={inputHandler}
            type="text"
            placeholder={currentuser.currentuser.favoriteAnimal}
            id="favoriteAnimal"
            size="70"
          />
            <input
            className="editinput"
            onChange={inputHandler}
            type="text"
            placeholder={currentuser.currentuser.description === '' ? "Tell us about you?" : currentuser.currentuser.description}
            id="image"
            size="70"
          />
     
          <button onClick={editButton}className="signupbutton" type="submit">
            Edit Profile
          </button>
        </form>
        {!newProfile.image ? <img className='profileimage' src="https://seeklogo.com/images/C/chef-logo-1B1BA8D5BF-seeklogo.com.png"/>:<img className="profileimage" src={Profile.image}/>}
        </div>
        <textarea
            className="editinput"
            onChange={inputHandler}
            type="text"
            placeholder='Tell us about you?'
            id="description"
            size="70"
          />
          <button className='descriptionput' onClick={editDescription}>Submit</button>
      <section className='mappedmeals'>
        {favMeals.map((e) => (
          <FavoriteList
            food={e.food}
            details={e.details}
            review={e.review}
            {...e}
          />
        ))}
        </section>
        </section>
        </div>
    )
}

export default Profile