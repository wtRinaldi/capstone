import React from 'react';
import useReservations from "../../hooks/useReservations";
import useAvailableTimes from "../../hooks/useAvailableTimes";
import {submitAPI} from "../../utils/fakeAPI";
import Select from "../common/Select";
import Input from "../common/Input";
import Label from "../common/Label";

function ReservationsForm() {
    const {reservation, dispatchReservation} = useReservations();
    const {availableTimes} = useAvailableTimes();

    function handleChange(event) {
        const type = event.target.id
        const value = event.target.value
        dispatchReservation({type: type, payload: value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(reservation, 'Success')
        submitAPI(reservation)
        dispatchReservation({type: 'reset-form'})
    }

    return (
        <section className="container mx-auto flex justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-80"
                  data-testid="reservation-form">
                <Label htmlFor="res-date">Choose date</Label>
                <Input type="date"
                       id="res-date"
                       data-testid="reservation-date-input"
                       value={reservation.date}
                       onChange={handleChange}
                       className="mb-6"
                       required/>
                <Label htmlFor="res-time">Choose time</Label>
                <Select id="res-time"
                        data-testid="reservation-time-input"
                        value={reservation.time}
                        onChange={handleChange}
                        className="mb-6"
                        required>
                    <option value="" disabled defaultValue>Please choose a time</option>
                    {availableTimes.times.map(time => {
                        return <option key={time}>{time}</option>
                    })}
                </Select>
                <Label htmlFor="guests">Number of guests</Label>
                <Input type="number"
                       placeholder="1"
                       min="1"
                       max="10"
                       id="guests"
                       data-testid="reservation-guests-input"
                       value={reservation.numberOfGuests}
                       onChange={handleChange}
                       className="mb-6"
                       required/>
                <Label htmlFor="occasion">Occasion</Label>
                <Select id="occasion"
                        data-testid="reservation-occasion-input"
                        value={reservation.occasion}
                        onChange={handleChange}
                        className="mb-12"
                        required>
                    <option value="" disabled defaultValue>Please select an occasion</option>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </Select>
                <Input className="bg-primary-light"
                       type="submit"
                       value="Make Your reservation"
                       aria-label="Submit Reservation"/>
            </form>
        </section>
    );
}

export default ReservationsForm;