import React from 'react';
import NavItem from './NavItem';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navlist">
        <NavItem path={'/'} text={'Home'} selected={null}/>
        <NavItem path={'/songs'} text={'Browse Songs'} selected={"navlist-selected"} />
        <NavItem path={'/new'} text={'Play Piano'} selected={"navlist-selected"} />
      </ul>
    </div>
  );
};

export default NavBar;