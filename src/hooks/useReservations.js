import {useReducer} from "react";

function reservationReducer(state, action) {
    const {type} = action;

    switch (type) {
        case 'res-date':
            return {...state, date: action.payload}
        case 'res-time':
            return {...state, time: action.payload}
        case 'guests': {
            return {...state, numberOfGuests: action.payload}
        }
        case 'occasion': {
            return {...state, occasion: action.payload}
        }
        default:
            return state
    }
}

const reservationInitialState = {
    date: '',
    time: '',
    numberOfGuests: 1,
    occasion: '',
}

const useReservations = () => {
    const [state, dispatch] = useReducer(reservationReducer, reservationInitialState)

    return {
        reservation: state,
        dispatchReservation: dispatch
    }
}

export default useReservations

