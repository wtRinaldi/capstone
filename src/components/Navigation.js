import React from 'react';

function Navigation(props) {
    const logoHorizontal = require("../assets/images/ll_logo_text_horizontal.png");

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
            url: '/order-online'
        },
        {
            name: 'Log In',
            url: '/log-in'
        },
    ]

    return (
        <nav className="container mx-auto flex justify-between py-4 items-center">
            <img src={logoHorizontal} alt="Little Lemon logo" height="96" width="175"/>
            <ul className="list-none flex">
                {navLinks.map(navLink => {
                    return (
                        <a href={navLink.url} key={navLink.url} className="pr-4">
                            <li>{navLink.name}</li>
                        </a>
                    )
                })}
            </ul>
        </nav>
    );
}

export default Navigation;