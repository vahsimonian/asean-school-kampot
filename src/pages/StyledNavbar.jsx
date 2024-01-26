import '../App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const StyledNavbar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <NavLink
            aria-current="page"
            to="/"
            style={({ isActive }) => ({
              color: isActive ? 'rgb(162, 82, 60)' : '#fff',
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
              color: isActive ? 'rgb(162, 82, 60)' : '#fff',
            })}
            className="navbar-item"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            aria-current="page"
            to="/blog"
            style={({ isActive }) => ({
              color: isActive ? 'rgb(162, 82, 60)' : '#fff',
            })}
            className="navbar-item"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            aria-current="page"
            to="/teachingprogram"
            style={({ isActive }) => ({
              color: isActive ? 'rgb(162, 82, 60)' : '#fff',
            })}
            className="navbar-item"
          >
            Teaching Program
          </NavLink>
        </li>
        <li>
          <NavLink
            aria-current="page"
            to="/contacts"
            style={({ isActive }) => ({
              color: isActive ? 'rgb(162, 82, 60)' : '#fff',
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
              color: isActive ? 'rgb(162, 82, 60)' : '#fff',
            })}
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
