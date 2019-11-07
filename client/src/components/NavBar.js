import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/songs">All Songs</NavLink></li>
        <li><NavLink to="/new">New Song</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;