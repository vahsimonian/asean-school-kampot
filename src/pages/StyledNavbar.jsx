import '../App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        style={({ isActive }) => ({ color: isActive ? 'blue' : 'grey' })}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => ({ color: isActive ? 'blue' : 'grey' })}
      >
        About
      </NavLink>

      <NavLink
        to="/blog"
        style={({ isActive }) => ({ color: isActive ? 'blue' : 'grey' })}
      >
        Blog
      </NavLink>

      <NavLink
        to="/teachingprogram"
        style={({ isActive }) => ({ color: isActive ? 'blue' : 'grey' })}
      >
        Teaching Program
      </NavLink>

      <NavLink
        to="/contacts"
        style={({ isActive }) => ({ color: isActive ? 'blue' : 'grey' })}
      >
        Contacts
      </NavLink>

      <NavLink
        to="/more"
        style={({ isActive }) => ({ color: isActive ? 'blue' : 'grey' })}
      >
        More
      </NavLink>
    </nav>
  );
};

export default StyledNavbar;
