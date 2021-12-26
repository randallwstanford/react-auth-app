/* eslint-disable no-console */
const express = require('express');
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');
const path = require('path');
const cors = require('cors');

const port = 3000;
const app = express();

const { createAccount } = require('./controllers');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'NCgnwiU3EJS8RbYoy9DfMoALs0e6AIeq',
  issuerBaseURL: 'https://dev-5c2q8mke.us.auth0.com',
};

// Static
app.use(express.static(path.join(__dirname, '../', 'client', 'dist')));

// Enable Cors
app.use(cors());

// app.use('/login', (req, res) => {
//   res.send({
//     token: 'test123',
//   });
// });

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  console.log(req.oidc.isAuthenticated());
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.post('/create/:email/:password', createAccount);

app.get('/api', (req, res) => {
  res.send('You have reached the API!');
});

app.get('*', (req, res) => {
  res.sendFile(`${path.resolve('./')}/client/dist/index.html`);
});

// app.get('/profile', requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });

app.listen(port, () => console.log(`🧠 Server listening on port ${port}!`));
