import React from 'react';
function Hero(props) {

    return (
        <section className="bg-primary">
            <div className="container mx-auto flex py-6">
                <div className="flex-1">
                    <h1 className="text-secondary text-5xl font-markazi">Little Lemon</h1>
                    <div className="text-white text-2xl font-markazi">Chicago</div>
                    <div className="text-white w-1/2">
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </div>
                </div>
                <div className="flex-1">
                    image
                </div>
            </div>
        </section>
    );
}

export default Hero;