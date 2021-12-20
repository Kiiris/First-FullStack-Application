import React, { useState } from 'react';
import axios from 'axios';

function Login(props) {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [Login, setLogin] = useState({
    username: '',
    password: '',
    valid: false
  });

  return (
    <div>
      <h1>Please Login Here</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
