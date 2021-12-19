import React, { useState } from 'react';

function Signup(props) {
  const [Sign, setSign] = useState({
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
    valid: false
  });

  const inputHandler = (e) => {
    setSign({ ...Sign, [e.target.id]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    Sign.password === Sign.passwordConfirm
      ? setSign({ ...Sign, valid: true })
      : setSign({ ...Sign, valid: false });
  };

  return (
    <div className="sign">
      <h1>Sign Up</h1>
      <form>
        <input
          onChange={inputHandler}
          type="text"
          placeholder="Email"
          id="email"
        />
        <label htmlFor="emailaddress">Email</label>
        <input
          onChange={inputHandler}
          type="text"
          placeholder="Username"
          id="username"
        />
        <label htmlFor="username">Username</label>

        <input
          onChange={inputHandler}
          type="password"
          placeholder="Password"
          id="password"
        />
        <label htmlFor="password">Password</label>

        <input
          onChange={inputHandler}
          type="password"
          placeholder="Confirm password"
          id="passwordConfirm"
        />
        <label htmlFor="passwordConfirm">Confirm password</label>

        <button onClick={submitHandler} type="submit">
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
