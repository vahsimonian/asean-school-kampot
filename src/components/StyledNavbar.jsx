import '../App.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import schoolLogo from '../assets/logo.jpg';

const StyledNavbar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <NavLink
            aria-current="page"
            to="/"
            style={({ isActive }) => ({
              color: isActive ? 'rgb(13, 27, 74)' : '#fff',
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
              color: isActive ? 'rgb(13, 27, 74)' : '#fff',
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
              color: isActive ? 'rgb(13, 27, 74)' : '#fff',
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
              color: isActive ? 'rgb(13, 27, 74)' : '#fff',
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
              color: isActive ? 'rgb(13, 27, 74)' : '#fff',
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
              color: isActive ? 'rgb(13, 27, 74)' : '#fff',
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
          <img
            src={schoolLogo}
            alt="Asean-school-logo"
            className="school-logo"
          />
          <p>ASEAN School</p>
        </div>
      </Link>
    </nav>
  );
};

export default StyledNavbar;
