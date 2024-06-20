import React from 'react';
import Button from "../../common/Button";
import SpecialsCard from "./SpecialsCard";
import {Link} from "react-router-dom";

function Specials(props) {
    const specials = [
        {
            name: 'Greek salad',
            price: 12.99,
            image: require('../../../assets/images/greek salad.jpg'),
            description: 'The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
        },
        {
            name: 'Bruschetta',
            price: 5.99,
            image: require('../../../assets/images/bruchetta.jpg'),
            description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
        },
        {
            name: 'Lemon Dessert',
            price: 5.00,
            image: require('../../../assets/images/lemon dessert.jpg'),
            description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
        }
    ]

    return (
        <section className="mt-20 lg:mt-28 container mx-auto">
            <div className="flex justify-between mb-8">
                <h1 className="text-3xl md:text-5xl font-semibold font-markazi">This weeks specials!</h1>
                <Link to="/menu">
                    <Button className="bg-primary-light">Online Menu</Button>
                </Link>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                {specials.map(special => <SpecialsCard special={special} key={special.name}/>)}
            </div>
        </section>
    );
}

export default Specials;