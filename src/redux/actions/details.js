import {
    GET_DETAIL_REQUEST, GET_DETAIL_SUCCESS, GET_DETAIL_FAILURE
} from '../types';
import DetailsService from '../../services/detail';

export function getDetail(url) {
    return function (dispatch) {
        dispatch({ type: GET_DETAIL_REQUEST });

        return DetailsService.getDetail(url)
            .then((data) => {
                dispatch({ type: GET_DETAIL_SUCCESS, payload: data });
                return [data, null];
            })
            .catch(error => {
                const errorMessage = error && error.message ? error.message : 'Something went wrong.';
                dispatch({ type: GET_DETAIL_FAILURE, payload: errorMessage });
                return [null, errorMessage];
            });
    };
}