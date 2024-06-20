// const {default: TestRunner} = require('jest-runner')
import {fireEvent, render, screen} from '@testing-library/react';
import ReservationsForm from "../../components/reservations/ReservationsForm";

test('form renders', () => {
    render(<ReservationsForm/>)
    const form = screen.getByTestId('reservation-form')

    expect(form).toBeInTheDocument()
})

test('empty form to be invalid', () => {
    render(<ReservationsForm/>)
    const form = screen.getByTestId('reservation-form')
    const submitButton = screen.getByRole('button', {type: 'submit'})
    fireEvent.click(submitButton)

    expect(form).toBeInvalid()
})

// test('form to be valid', () => {
//     render(<ReservationsForm/>)
//     const form = screen.getByTestId('reservation-form')
//     const submitButton = screen.getByRole('button', {type: 'submit'})
//     fireEvent.click(submitButton)
//
//     expect(form).toBeInvalid()
// })


// import { render, screen } from '@testing-library/react';
// import App from './App';
//
// test('renders learn react link', () => {
//     render(<App />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });