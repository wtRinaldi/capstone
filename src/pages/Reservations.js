import React, {useEffect} from 'react';
import ReservationsForm from "../components/reservations/ReservationsForm";

function Reservations() {
    useEffect(() => {
        document.title = 'Little Lemon - Reserve a table'
    }, [])

    return (
        <>
            <h1 className="text-3xl md:text-5xl my-10 font-markazi">Reserve your table</h1>
            <ReservationsForm/>
        </>
    );
}

export default Reservations;