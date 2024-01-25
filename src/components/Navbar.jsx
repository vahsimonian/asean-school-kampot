import '../App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="active">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/teachingprogram" activeClassName="active">
            Teaching Program
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" activeClassName="active">
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink to="/more" activeClassName="active">
            More
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
