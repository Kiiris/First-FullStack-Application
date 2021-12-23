import React, { useState } from 'react';
import axios from 'axios';
const BASE_URL = 'http://localhost:3001/api/';

function Signup() {
  const [Profile, setProfiles] = useState([]);
  const [valid, setValid] = useState(false);
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
      ? setNewProfile({ ...newProfile }, setValid(true), makeUser())
      : setValid(false);
  };

  return (
    <div>
      <h1>Let's Get Cooking!</h1>
      <div className="sign">
        <h2 className="signin">Sign Up!</h2>
        <form>
          <input
            className="signinput"
            onChange={inputHandler}
            type="text"
            value={newProfile.email}
            placeholder="Email"
            id="email"
            size="40"
          />
          <input
            className="signinput"
            onChange={inputHandler}
            type="text"
            value={newProfile.username}
            placeholder="Username"
            id="username"
            size="40"
          />

          <input
            className="signinput"
            onChange={inputHandler}
            type="password"
            value={newProfile.password}
            placeholder="Password"
            id="password"
            size="40"
          />

          <input
            className="signinput"
            onChange={inputHandler}
            type="password"
            value={newProfile.passwordConfirm}
            placeholder="Confirm password"
            id="passwordConfirm"
            size="40"
          />
          <input
            className="signinput"
            onChange={inputHandler}
            type="text"
            value={newProfile.favoriteAnimal}
            placeholder="Favorite Animal?"
            id="favoriteAnimal"
            size="40"
          />

          <button className="signupbutton" onClick={SignupButton} type="submit">
            Sign Up
          </button>
          <p id="required">
            {newProfile.password != newProfile.passwordConfirm
              ? 'Passwords Must Match'
              : null}
          </p>
          <p id="sucess">{valid === true ? 'Welcome Aboard!' : null}</p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
