import React, { useState } from 'react';
import axios from 'axios';
const BASE_URL = 'http://localhost:3001/api/';

function Signup(isLoggedIn, setisLoggedIn) {
  const [Profile, setProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
    favoriteAnimal: ''
  });

  const inputHandler = (e) => {
    setNewProfile({ ...newProfile, [e.target.id]: e.target.value });
  };

  const makeUser = async () => {
    const res = await axios.post(`${BASE_URL}/createprofiles`, newProfile);
    setProfiles(res.data.Profile);
    console.log(res);
  };

  const SignupButton = (e) => {
    e.preventDefault();
    Profile.password === Profile.passwordConfirm
      ? setNewProfile({ ...newProfile }, setisLoggedIn(true), makeUser())
      : setNewProfile({ ...newProfile });
  };

  return (
    <div className="sign">
      <h2>Sign Up</h2>
      <form>
        <input
          onChange={inputHandler}
          type="text"
          value={newProfile.email}
          placeholder="Email"
          id="email"
        />
        <input
          onChange={inputHandler}
          type="text"
          value={newProfile.username}
          placeholder="Username"
          id="username"
        />

        <input
          onChange={inputHandler}
          type="password"
          value={newProfile.password}
          placeholder="Password"
          id="password"
        />

        <input
          onChange={inputHandler}
          type="password"
          value={newProfile.passwordConfirm}
          placeholder="Confirm password"
          id="passwordConfirm"
        />
        <input
          onChange={inputHandler}
          type="text"
          value={newProfile.favoriteAnimal}
          placeholder="Favorite Animal?"
          id="favoriteAnimal"
        />

        <button onClick={SignupButton} type="submit">
          Sign Up
        </button>
        {/* <p>
          {Sign.valid === true ? 'Passwords Match!' : 'Passwords must match'}
        </p>
        <p>
          {Sign.password.length && Sign.passwordConfirm.length < 7
            ? 'Password MUST be 7 characters'
            : 'Strong password!'}
          ''
        </p> */}
      </form>
    </div>
  );
}

export default Signup;
