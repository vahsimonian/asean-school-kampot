import '../App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const StyledNavbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teachingprogram"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Teaching Program
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/more"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            More
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default StyledNavbar;
