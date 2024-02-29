import React from 'react';
import homeImage from '../assets/home.jpg';

const Home = () => {
  return (
    <div className="home-page">
      <h1 className="welcome">Welcome to Our School</h1>
      <img src={homeImage} alt="home" className="home-img" />
      <p>
        This is a brief introduction to our school. Here, you can find
        information about our values, mission, and educational programs.
      </p>
    </div>
  );
};

export default Home;
