import React from 'react';
import useReservations from "../../hooks/useReservations";

function ReservationsForm() {
    const {state, dispatch} = useReservations();

    function handleChange(event) {
        const type = event.target.id
        const value = event.target.value
        dispatch({type: type, payload: value})
    }

    return (
        <section className="container mx-auto flex justify-center">
            <form className="flex flex-col gap-4">
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={state.date} onChange={handleChange}/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={state.time} onChange={handleChange}>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests"
                       value={state.numberOfGuests}
                       onChange={handleChange}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={state.occasion} onChange={handleChange}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation"/>
            </form>
        </section>
    );
}

export default ReservationsForm;