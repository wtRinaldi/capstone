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
    date: null,
    time: null,
    numberOfGuests: 1,
    occasion: null,
}

const useReservations = () => {
    const [state, dispatch] = useReducer(reservationReducer, reservationInitialState)

    return {
        state: state,
        dispatch: dispatch
    }
}

export default useReservations

