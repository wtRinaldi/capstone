import {useEffect, useReducer} from "react";
import {fetchAPI} from "../utils/fakeAPI";

function availableTimesReducer(state, action) {
    const {type} = action;
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
        return fetchAPI(new Date())
    }

    useEffect(() => {
        const times = initializeTimes();
        dispatch({type: 'updateTimes', payload: times})
    }, [])

    return {
        availableTimes: state,
        dispatchAvailableTimes: dispatch
    }
}

export default useAvailableTimes

