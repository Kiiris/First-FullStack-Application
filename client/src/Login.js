import React, { useState } from 'react';

function Login(props) {
  const [Login, setLogin] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
    valid: false
  });

  return (
    <div>
      <h1>Login Info</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />

        <input type="text" placeholder="Confirm password" />

        {/* <button onClick={props.submit} type="submit">
          Login
        </button> */}
      </form>
    </div>
  );
}

export default Login;
