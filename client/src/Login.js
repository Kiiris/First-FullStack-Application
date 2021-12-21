import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// const BASE_URL = 'http://localhost:3001/api/getallprofiles';

function Login(props) {
  // const [isLoggedIn, setisLoggedIn] = useState(false);
  // const [Profile, setProfiles] = useState({});
  // const [Login, setLogin] = useState({
  //   username: '',
  //   password: ''
  // });

  // useEffect(() => {
  //   let isCancelled = false;
  //   const getProfileList = async () => {
  //     const response = await axios.get(`${BASE_URL}`);
  //     if (!isCancelled) {
  //       setProfiles(response.data.profiles);
  //     }
  //   };
  //   getProfileList();
  //   return () => {
  //     isCancelled = true;
  //   };
  // }, []);

  // const loginButton = (e) => {
  //   e.preventDefault();
  //   Profile.forEach((element) => {
  //     if (
  //       element.username === Login.username &&
  //       element.password === Login.password
  //     ) {
  //       setisLoggedIn(true);
  //       console.log('it works!');
  //     }
  //   });
  // };

  // const inputHandler = (e) => {
  //   setLogin({ ...Login, [e.target.id]: e.target.value });
  // };
  return (
    <div>
      {/* <form>
        <input
          type="text"
          onChange={inputHandler}
          value={Login.username}
          id="username"
          placeholder="Username"
        />
        <input
          type="text"
          onChange={inputHandler}
          value={Login.password}
          id="password"
          placeholder="Password"
        />

        <button onClick={loginButton} type="submit">
          Login
        </button>
      </form> */}
    </div>
  );
}

export default Login;
