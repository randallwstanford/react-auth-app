/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Login.css';

// Validation Regex
const emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const passwordValidation = /^[a-zA-Z0-9]{8,14}/;
const baseURL = 'http://localhost:3000';
const config = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  },
};

const Login = ({ setToken }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginUser = async () => {
    return axios.post(`${baseURL}/login`, config)
      .then((response) => response.data.token)
      .catch((error) => error);
  };

  const createAccount = () => {
    return axios.post(`${baseURL}/create/${email}/${password}`, config)
      .then(async () => setToken(await loginUser()))
      .catch((error) => error);
  };

  const handleSubmit = async () => setToken(await loginUser());

  if (emailValidation.test(email) && passwordValidation.test(password) && password !== undefined) {
    console.log('validated');
  } else {
    console.log('DISABLE LOGIN/CREATE BUTTON');
  }

  return (
    <div className="login-container">
      <h1>Login:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Username:</label><br />
        <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} /><br />
        <label htmlFor="password">Password:</label><br />
        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} /><br />
        <button type="submit" label="Submit">Login</button>
        <button type="submit" label="Submit" onClick={createAccount}>Create Account</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
