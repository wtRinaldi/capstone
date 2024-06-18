import React from 'react';

function Header(props) {
    return (
        <header>
            <meta name="description" content="Little Lemon restaurant."/>
            <meta name="og:title" content="Little Lemon restaurant."/>
            <meta name="og:description" content="Finest restaurant in the land."/>
            <meta name="og:image" content="https://example.com/one-place-fishing-store.jpg"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400..700&display=swap" rel="stylesheet"/>
        </header>
    );
}

export default Header;