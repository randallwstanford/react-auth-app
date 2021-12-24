/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Login.css';

const loginUser = async (credentials) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    },
  };
  return axios.post('http://localhost:3000/login', config)
    .then((response) => response.data.token)
    .catch((error) => error);
};

const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    const token = await loginUser({ username, password });
    setToken(token);
  };

  return (
    <div className="login-container">
      <h1>Login:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label><br />
        <input type="text" name="username" onChange={(e) => setUserName(e.target.value)} /><br />
        <label htmlFor="password">Password:</label><br />
        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} /><br />
        <button type="submit" label="Submit">Submit</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
