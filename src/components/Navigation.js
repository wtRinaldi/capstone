import React from 'react';

function Navigation(props) {

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
        <nav className="flex justify-around">
            <img src="../logo.svg" alt="Little Lemon logo"/>
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