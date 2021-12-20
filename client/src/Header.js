import { Link } from 'react-router-dom';
import React from 'react';
import App from './App';

const Header = (Profile, isLoggedIn) => {
  return (
    <div>
      <ul id="navbar">
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/logininfo"> Login</Link>
          </li>
          <li>
            <Link to="/recipes"> Recipes</Link>
          </li>
          <li>
            <Link to="/signup"> Sign Up</Link>
          </li>
          <li>
            <Link to="/createrecipe/">Make Recipes!</Link>
          </li>
          <li>
            <Link to="/allprofiles/">All Chefs!</Link>
          </li>
          {isLoggedIn === true ? (
            <li>
              <Link to="/profile/id">{Profile.username}</Link>
            </li>
          ) : null}
        </nav>
      </ul>
    </div>
  );
};

export default Header;
