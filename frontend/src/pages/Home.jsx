import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/todo');
  };

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to Todo Application</h1>
        <p>Your productivity booster</p>
        <button className="get-started-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </header>
    </div>
  );
};

export default Home;
