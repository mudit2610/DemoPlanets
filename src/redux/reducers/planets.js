import {
    GET_PLANETS_REQUEST, GET_PLANETS_SUCCESS, GET_PLANETS_FAILURE,
    GET_PLANETS_REFRESH_REQUEST, GET_PLANETS_REFRESH_SUCCESS, GET_PLANETS_REFRESH_FAILURE
} from '../types';

const initialState = {
    data: [],
    next: "",
    previous: "",
    count: []
};

export default function (state = initialState, action) {

    switch (action.type) {
        case GET_PLANETS_SUCCESS:

            return { ...state, data: [...state.data, ...action.payload.results], next: action.payload.next, previous: action.payload.previous, count: action.payload.count };
        case GET_PLANETS_REFRESH_SUCCESS:

            return { ...state, data: action.payload.results, next: action.payload.next, previous: action.payload.previous, count: action.payload.count };

        default:
            return state;
    }
}
