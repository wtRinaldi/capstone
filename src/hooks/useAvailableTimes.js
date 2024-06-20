import {useEffect, useReducer} from "react";

function availableTimesReducer(state, action) {
    const {type} = action;

    debugger

    switch (type) {
        case 'updateTimes':
            return {...state, times: [...action.payload]}
        default:
            return state
    }
}

const availableTimesInitialState = {
    times: []
}

const useAvailableTimes = () => {
    const [state, dispatch] = useReducer(availableTimesReducer, availableTimesInitialState)

    function initializeTimes() {
        return [
            {hour: '17:00'},
            {hour: '18:00'},
            {hour: '19:00'}
        ]
    }

    useEffect(() => {
        const times = initializeTimes();
        dispatch({type: 'updateTimes', payload: times})
    }, [])

    // debugger;

    return {
        availableTimes: state,
        dispatchAvailableTimes: dispatch
    }
}

export default useAvailableTimes

