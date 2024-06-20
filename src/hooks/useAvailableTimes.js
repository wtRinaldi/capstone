import {useEffect, useReducer} from "react";


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

const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ':00');
        }
        if (random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const useAvailableTimes = () => {
    const [state, dispatch] = useReducer(availableTimesReducer, availableTimesInitialState)

    function initializeTimes() {
        return fetchAPI(new Date())
    }

    useEffect(() => {

        const times = initializeTimes();
        debugger
        dispatch({type: 'updateTimes', payload: times})
    }, [])

    // debugger;

    return {
        availableTimes: state,
        dispatchAvailableTimes: dispatch
    }
}

export default useAvailableTimes

