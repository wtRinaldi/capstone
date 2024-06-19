import React from 'react';
import heroImg from "../assets/images/restauranfood.jpg";

function Hero(props) {
    const heroImg = require("../assets/images/restauranfood.jpg");
    return (
        <>
            <section className="bg-primary-dark">
                <div className="container mx-auto py-6 flex">
                    <div className="flex flex-col items-start w-1/2">
                        <h1 className="text-left text-primary-light text-4xl md:text-5xl font-markazi mb-2">Little
                            Lemon</h1>
                        <div className="text-white text-2xl font-markazi mb-4">Chicago</div>
                        <div className="text-left text-white w-3/4">
                            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a
                            modern twist.
                        </div>
                    </div>
                    <img src={heroImg} height="50%" width="50%"
                         className="h-auto max-h-64 object-cover rounded-2xl translate-y-1/4 -translate-x-1.5"/>
                </div>
            </section>


        </>
    );
}

export default Hero;