import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/todo" className={({ isActive }) => (isActive ? 'active' : '')}>
            Todo
          </NavLink>
        </li>
        <li>
          <NavLink to="/common-todos" className={({ isActive }) => (isActive ? 'active' : '')}>
            Public Todos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
