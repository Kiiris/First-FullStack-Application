import React, { useState } from 'react';

const Signup = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
    valid: false
  });

  const inputHandler = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    form.password === form.passwordConfirm
      ? ((e.target.className = 'valid'), setForm({ ...form, valid: true }))
      : ((e.target.className = 'invalid'), setForm({ ...form, valid: false }));
  };

  return (
    <div className="form">
      <h1>Sign Up</h1>
      <form>
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
        <p>
          {form.valid === true ? 'Passwords Match!' : 'Passwords must match'}
        </p>
        <p>
          {form.password.length && form.passwordConfirm.length < 7
            ? 'Password MUST be 7 characters'
            : 'Strong password!'}
        </p>
      </form>
    </div>
  );
};

export default Signup;
