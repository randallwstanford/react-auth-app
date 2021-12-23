import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.tsx';
import Login from './Login.tsx';
import useToken from './useToken';

const App = () => {
  const { token, setToken } = useToken();

  if (!token) return <Login setToken={setToken} />;

  return (
    <div className="App">
      <h1>Home page</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
