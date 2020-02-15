import {
    GET_DETAIL_REQUEST, GET_DETAIL_SUCCESS, GET_DETAIL_FAILURE

} from '../types';

const initialState = {
    data: {},

};

export default function (state = initialState, action) {

    switch (action.type) {
        case GET_DETAIL_SUCCESS:
            const { url } = action.payload;
            const newState = { ...state.data };
            newState[url] = action.payload;
            debugger;
            return { data: newState };

        default:
            return state;
    }
}