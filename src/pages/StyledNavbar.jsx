import '../App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const StyledNavbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
            className="navbar-item"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
            className="navbar-item"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
            className="navbar-item"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teachingprogram"
            style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
            className="navbar-item"
          >
            Teaching Program
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
            className="navbar-item"
          >
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/more"
            style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
            className="navbar-item"
          >
            More
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default StyledNavbar;
