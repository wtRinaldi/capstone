import React, {useEffect, useReducer} from "react";

function availableTimesReducer(state, action) {
    const {type} = action;

    switch (type) {
        case 'updateTimes':
            return {...state, date: action.payload}
        default:
            return state
    }
}

const availableTimesInitialState = {
    availableTimes: []
}

const useAvailableTimes = () => {
    const [state, dispatch] = useReducer(availableTimesReducer, availableTimesInitialState)

    function initializeTimes() {
        return [
            {time: '17:00'},
            {time: '18:00'},
            {time: '19:00'}
        ]
    }

    useEffect(() => {
        const times = initializeTimes();
        dispatch({type: 'updateTimes', payload: times})
    }, [])

    return {
        state: state,
        dispatch: dispatch
    }
}

export default useAvailableTimes

