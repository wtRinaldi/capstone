import React from 'react';
import useReservations from "../../hooks/useReservations";
import useAvailableTimes from "../../hooks/useAvailableTimes";

function ReservationsForm() {
    const {reservation, dispatchReservation} = useReservations();
    const {availableTimes} = useAvailableTimes();
    const submitAPI = function (formData) {
        return true;
    };

    function handleChange(event) {
        const type = event.target.id
        const value = event.target.value
        dispatchReservation({type: type, payload: value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        submitAPI(reservation)
        dispatchReservation({type: 'reset-form'})
    }

    return (
        <section className="container mx-auto flex justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" data-testid="reservation-form">
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={reservation.date} onChange={handleChange} required/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={reservation.time} onChange={handleChange} required>
                    <option value="" disabled defaultValue>Please choose a time</option>
                    {availableTimes.times.map(time => {
                        return <option key={time}>{time}</option>
                    })}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests"
                       value={reservation.numberOfGuests}
                       onChange={handleChange} required/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={reservation.occasion} onChange={handleChange} required>
                    <option value="" disabled defaultValue>Please select an occasion</option>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation"/>
            </form>
        </section>
    );
}

export default ReservationsForm;