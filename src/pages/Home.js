import React, {useEffect} from 'react';
import Hero from "../components/home/Hero";
import Specials from "../components/home/specials/Specials";

function Home(props) {
    useEffect(() => {
        document.title = 'Little Lemon - Traditional Mediterranean restaurant'
    }, [])

    return (
        <>
            <Hero/>
            <Specials/>
        </>
    );
}

export default Home;