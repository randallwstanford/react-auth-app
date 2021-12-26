import { useState } from 'react';

export default function useToken() {
  const getToken = () => JSON.parse(sessionStorage.getItem('token'));

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };
  console.log(token);
  return { setToken: saveToken, token };
}
