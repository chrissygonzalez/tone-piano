import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navlist">
        <li className="navlist-item"><NavLink to="/" className="navlink" >Home</NavLink></li>
        <li className="navlist-item"><NavLink to="/songs" className="navlink" activeClassName="navlist-selected">Browse Songs</NavLink></li>
        <li className="navlist-item"><NavLink to="/new" className="navlink" activeClassName="navlist-selected">Play Piano</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;