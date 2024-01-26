import '../App.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import myPhoto from '../assets/vah.png';

const StyledNavbar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <NavLink
            aria-current="page"
            to="/"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : 'rgb(13, 27, 74)',
            })}
            className="navbar-item"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            aria-current="page"
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : 'rgb(13, 27, 74)',
            })}
            className="navbar-item"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            aria-current="page"
            to="/my-works"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : 'rgb(13, 27, 74)',
            })}
            className="navbar-item"
          >
            My Works
          </NavLink>
        </li>
        <li>
          <NavLink
            aria-current="page"
            to="/teachingprogram"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : 'rgb(13, 27, 74)',
            })}
            className="navbar-item"
          >
            Curriculum
          </NavLink>
        </li>
        <li>
          <NavLink
            aria-current="page"
            to="/contacts"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : 'rgb(13, 27, 74)',
            })}
            className="navbar-item"
          >
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink
            aria-current="page"
            to="/more"
            style={({ isActive }) => ({
              color: isActive ? '#fff' : 'rgb(13, 27, 74)',
            })}
            className="navbar-item"
          >
            More...
          </NavLink>
        </li>
      </ul>
      <Link
        to={
          'https://web.facebook.com/profile.php?id=100054397844962&sk=mentions'
        }
        target="_blank"
      >
        <div className="logo">
          <img src={myPhoto} alt="Asean-school-logo" className="school-logo" />
          <p>Vah Simonian</p>
        </div>
      </Link>
    </nav>
  );
};

export default StyledNavbar;
