import React, {useEffect} from 'react';

function Order(props) {
    useEffect(() => {
        document.title = 'Little Lemon - Order Online'
    }, [])
    return (
        <div>Order Online Page</div>
    );
}

export default Order;