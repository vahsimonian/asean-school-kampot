import React from 'react';
import homeImage from '../assets/home.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <h1 className="welcome">Welcome to Our School</h1>
      <img src={homeImage} alt="home" className="home-img" />
      <p>
        This is a brief introduction to our school. Here, you can find
        information about our values, mission, and educational programs.
      </p>
      <Link to="https://learnenglish.com" target="_blank">
        learnenglish.com
      </Link>
    </div>
  );
};

export default Home;
