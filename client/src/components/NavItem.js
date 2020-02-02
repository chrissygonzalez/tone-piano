import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
    return (
        <li className="navlist-item">
            <NavLink to={props.path} className="navlink" activeClassName={props.selected}>{props.text}</NavLink>
        </li>
        )
    }
    
export default NavItem;