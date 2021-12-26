/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

const { Pool } = require('pg');

const { getUserData, createAcct } = require('./queries');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'user_data',
  password: 'fish',
  port: 5432,
});

pool.connect((err, client, release) => {
  if (err) { return console.error('Error acquiring client', err.stack); }

  client.query('SELECT NOW()', () => {
    release();
    if (err) { return console.error('Error executing query', err.stack); }
  });
});

exports.createAccount = (req, res) => {
  const { email, password } = req.params;
  pool.query(createAcct, [email, password])
    .then(() => console.log('account created!'))
    .catch((err) => console.log(err));
  res.send('CREATED');
};

exports.getData = (req, res) => {
  pool.query(getUserData, [userId])
    .then((response) => res.send(response.rows[0]))
    .catch((err) => console.log(err));
};
