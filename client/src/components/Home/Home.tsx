import React from 'react';

import './Home.css';

const Home = function () {
  const handleLogout = () => {
    sessionStorage.removeItem('token');
  };

  return (
    <div>
      <div>Welcome</div>
      <button type="button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
