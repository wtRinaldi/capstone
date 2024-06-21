// const {default: TestRunner} = require('jest-runner')
import {fireEvent, render, screen} from '@testing-library/react';
import ReservationsForm from "../../components/reservations/ReservationsForm";
import {submitAPI} from "../../utils/fakeAPI";


describe('Reservation form', () => {

    test('form renders', () => {
        render(<ReservationsForm/>)
        const form = screen.getByTestId('reservation-form')

        expect(form).toBeInTheDocument()
    })

    test('empty form to be invalid', () => {
        render(<ReservationsForm/>)
        const form = screen.getByTestId('reservation-form')

        expect(form).toBeInvalid()
    })

    test('form to be valid', () => {
        render(<ReservationsForm/>)
        const form = screen.getByTestId('reservation-form')
        const dateInput = screen.getByTestId('reservation-date-input')
        const timeInput = screen.getByTestId('reservation-time-input')
        const guestsInput = screen.getByTestId('reservation-guests-input')
        const occasionInput = screen.getByTestId('reservation-occasion-input')
        // const submitButton = screen.getByRole('button', {type: 'submit'})

        fireEvent.change(dateInput, {target: {value: "2024-06-20"}})
        fireEvent.change(timeInput, {target: {value: "17:30"}})
        fireEvent.change(guestsInput, {target: {value: "2"}})
        fireEvent.change(occasionInput, {target: {value: "Birthday"}})
        // fireEvent.click(submitButton)

        expect(form).toBeValid()
    })

    test('date input to be invalid', () => {
        render(<ReservationsForm/>)
        const dateInput = screen.getByTestId('reservation-date-input')
        fireEvent.change(dateInput, {target: {value: ""}})

        expect(dateInput).toBeInvalid()
    })

    test('date input to be valid', () => {
        render(<ReservationsForm/>)
        const dateInput = screen.getByTestId('reservation-date-input')
        fireEvent.change(dateInput, {target: {value: "2024-06-20"}})

        expect(dateInput).toBeValid()
    })

    test('time input to be invalid', () => {
        render(<ReservationsForm/>)
        const timeInput = screen.getByTestId('reservation-time-input')
        fireEvent.change(timeInput, {target: {value: ""}})

        expect(timeInput).toBeInvalid()
    })

    test('time input to be valid', () => {
        render(<ReservationsForm/>)
        const timeInput = screen.getByTestId('reservation-time-input')
        fireEvent.change(timeInput, {target: {value: "17:30"}})

        expect(timeInput).toBeValid()
    })

    test('guests input to be invalid', () => {
        render(<ReservationsForm/>)
        const guestsInput = screen.getByTestId('reservation-guests-input')
        fireEvent.change(guestsInput, {target: {value: ""}})

        expect(guestsInput).toBeInvalid()
    })

    test('guests input to be valid', () => {
        render(<ReservationsForm/>)
        const guestsInput = screen.getByTestId('reservation-guests-input')
        fireEvent.change(guestsInput, {target: {value: "2"}})

        expect(guestsInput).toBeValid()
    })

    test('occasion input to be invalid', () => {
        render(<ReservationsForm/>)
        const occasionInput = screen.getByTestId('reservation-occasion-input')
        fireEvent.change(occasionInput, {target: {value: ""}})

        expect(occasionInput).toBeInvalid()
    })

    test('occasion input to be valid', () => {
        render(<ReservationsForm/>)
        const occasionInput = screen.getByTestId('reservation-occasion-input')
        fireEvent.change(occasionInput, {target: {value: "Birthday"}})

        expect(occasionInput).toBeValid()
    })

    test("submitAPI with data to be true", () => {
        const formData = {
            date: "2024-01-26",
            time: "17:00",
            guests: 7,
            occasion: "Birthday",
        };
        const result = submitAPI(formData);
        expect(result).toBe(true);
    });
})