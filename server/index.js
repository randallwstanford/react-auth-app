/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const cors = require('cors');

const port = 3000;
const app = express();

const { createAccount } = require('./controllers');

// Static
app.use(express.static(path.join(__dirname, '../', 'client', 'dist')));

// Enable Cors
app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123',
  });
});

app.post('/create', createAccount);

app.get('/api', (req, res) => {
  res.send('You have reached the API!');
});

app.get('*', (req, res) => {
  res.sendFile(`${path.resolve('./')}/client/dist/index.html`);
});

app.listen(port, () => console.log(`🧠 Server listening on port ${port}!`));
