import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navlist">
        <li className="navlist-item"><NavLink to="/songs">All Songs</NavLink></li>
        {/* <li className="navlist-item"><NavLink to="/songs">All Songs</NavLink></li> */}
        <li className="navlist-item"><NavLink to="/new">New Song</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;