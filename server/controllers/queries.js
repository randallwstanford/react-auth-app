exports.getUserData = 'SELECT * FROM users WHERE id = $1';

exports.createAcct = 'INSERT INTO users (email, password) VALUES ($1, crypt($2, gen_salt("bf"))';
