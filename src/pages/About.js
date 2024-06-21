import React, {useEffect} from 'react';

function About(props) {
    useEffect(() => {
        document.title = 'Little Lemon - About Us'
    }, [])

    return (
        <div>About page </div>
    );
}

export default About;