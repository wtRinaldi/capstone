import React from 'react';

function SpecialsCard({special}) {
    function formatCurrency(price) {
        return new Intl.NumberFormat('en-US',
            {
                style: 'currency',
                currency: 'USD'
            }).format(price);
    }

    return (
        <div className="flex flex-col flex-1 bg-gray-100 rounded-2xl">
            <img src={special.image} height="100" alt={special.description}
                 className="rounded-t-2xl max-h-56 object-cover"/>
            <div className="flex-col p-6 h-full">
                <div className="flex justify-between font-semibold mb-3">
                    <div>{special.name}</div>
                    <div>{formatCurrency(special.price)}</div>
                </div>
                <div className="text-sm text-left font-thin min-h-24">{special.description}</div>
                <div className="text-left font-semibold">
                    Order a delivery
                </div>
            </div>
        </div>
    );
}

export default SpecialsCard;