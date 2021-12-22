import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const BASE_URL = 'http://localhost:3001/api/getallprofiles';

const Header = ({ setcurrentUser }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const [Profile, setProfiles] = useState({});
  const [Login, setLogin] = useState({
    username: '',
    password: ''
  });

  useEffect(() => {
    let isCancelled = false;
    const getProfileList = async () => {
      const response = await axios.get(`${BASE_URL}`);
      if (!isCancelled) {
        setProfiles(response.data.profiles);
      }
    };
    getProfileList();
    return () => {
      isCancelled = true;
    };
  }, []);

  const loginButton = (e) => {
    e.preventDefault();
    Profile.forEach((element) => {
      if (
        element.username === Login.username &&
        element.password === Login.password
      ) {
        setisLoggedIn(true);
        setcurrentUser(element);
        console.log(element);
      }
    });
  };

  const inputHandler = (e) => {
    setLogin({ ...Login, [e.target.className]: e.target.value });
  };

  return (
    <div>
      <ul id="navbar">
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/logininfo"> Login</Link>
          </li> */}
          <li>
            <Link to="/recipes"> Recipes</Link>
          </li>
          <li>
            <Link to="/signup"> Sign Up</Link>
          </li>
          {isLoggedIn === true ? (
            <li>
              <Link to="/createrecipe/">Make Recipes!</Link>
            </li>
          ) : null}
          {isLoggedIn === true ? (
            <li>
              <Link to="/allprofiles/">All Chefs!</Link>
            </li>
          ) : null}
          {isLoggedIn === true ? (
            <li>
              <Link to="/yourprofile/">Profile</Link>
            </li>
          ) : null}
        </nav>
      </ul>
      <form className="valid">
        <input
          type="text"
          onChange={inputHandler}
          value={Login.username}
          className="username"
          placeholder="Username"
        />
        <input
          type="text"
          onChange={inputHandler}
          value={Login.password}
          className="password"
          placeholder="Password"
        />

        <button onClick={loginButton} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Header;
