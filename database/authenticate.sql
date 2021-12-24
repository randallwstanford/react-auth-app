SELECT id, msg
  FROM users
 WHERE email = 'koop@mail.com'
   AND password = crypt('johnspassword', password);