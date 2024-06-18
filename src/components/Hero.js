import React from 'react';

function Hero(props) {
    const heroImg = require("../assets/images/restauranfood.jpg");
    return (
        <section className="bg-primary-dark">
            <div className="container mx-auto flex py-6">
                <div className="w-1/2 pl-12">
                    <h1 className="text-primary-light text-5xl font-markazi">Little Lemon</h1>
                    <div className="text-white text-2xl font-markazi">Chicago</div>
                    <div className="text-white w-1/2">
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a
                        modern twist.
                    </div>
                </div>
                <div className="flex-1 h-1">
                    <img src={heroImg}
                         className="relative left-12 top-3 rounded-xl"
                         height="auto"
                         width="100%"
                         alt="restaurant food"/>
                </div>
            </div>
        </section>
    );
}

export default Hero;