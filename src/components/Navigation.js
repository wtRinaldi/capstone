import React from 'react';
import {Link} from "react-router-dom";

function Navigation(props) {
    const logoHorizontal = require("../assets/logos/ll_logo_text_horizontal.png");

    const navLinks = [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'About',
            url: '/about'
        },
        {
            name: 'Menu',
            url: '/menu'
        },
        {
            name: 'Reservations',
            url: '/reservations'
        },
        {
            name: 'Order Online',
            url: '/order'
        },
        {
            name: 'Log In',
            url: '/login'
        },
    ]

    return (
        <nav className="container mx-auto flex justify-between py-4 items-center">
            <img src={logoHorizontal} alt="Little Lemon logo" height="96" width="175"/>
            <ul className="list-none flex">
                {navLinks.map(navLink => {
                    return (
                        <Link to={navLink.url} key={navLink.url} className="px-4">
                            <li className="font-semibold">{navLink.name}</li>
                        </Link>
                    )
                })}
            </ul>
        </nav>
    );
}

export default Navigation;