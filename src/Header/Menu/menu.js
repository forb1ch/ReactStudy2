import React from "react";
import { NavLink } from 'react-router-dom';

import './menu.scss';

const links = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Portfolio',
        path: '/portfolio',
    },
    {
        name: 'Skills Stack',
        path: '/skills',
    },
    {
        name: 'About',
        path: '/about',
    }
];

const Menu = (props) => {
    let componentDidMount = (prop) => {
        window.scrollTo(0, 0);
    }

    return (
        <ul className="nav-menu nav-menu_header">
            {links.map((link, index) => (
                <li key={index} className='nav-menu_item' onClick={ componentDidMount }><NavLink key={index} to={link.path} exact activeClassName="active" onClick={ props.onOpenLink }>{link.name}</NavLink></li>
            ))}
        </ul>
    );
}

export default Menu;