import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <div>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/categories"> Login</Link>
        <Link to="/form"> Recipes</Link>
        <Link to="/SignUp"> Sign Up</Link>
      </nav>
    </div>
  );
};

export default Header;
