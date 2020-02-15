import {
    GET_PLANETS_REQUEST, GET_PLANETS_SUCCESS, GET_PLANETS_FAILURE, GET_PLANETS_REFRESH_REQUEST, GET_PLANETS_REFRESH_SUCCESS, GET_PLANETS_REFRESH_FAILURE
} from '../types';
import PlanetsService from '../../services/planets';

export function getPlanets(url) {
    return function (dispatch) {
        dispatch({ type: GET_PLANETS_REQUEST });

        return PlanetsService.getPlanets(url)
            .then((data) => {
                dispatch({ type: GET_PLANETS_SUCCESS, payload: data });
                return [data, null];

            })
            .catch(error => {
                const errorMessage = error && error.message ? error.message : 'Something went wrong.';
                dispatch({ type: GET_PLANETS_FAILURE, payload: errorMessage });
                return [null, errorMessage];
            });
    };
}

export function getPlanetsRefresh(url) {
    return function (dispatch) {
        dispatch({ type: GET_PLANETS_REFRESH_REQUEST });

        return PlanetsService.getPlanets()
            .then((data) => {
                dispatch({ type: GET_PLANETS_REFRESH_SUCCESS, payload: data });
                return [data, null];

            })
            .catch(error => {
                const errorMessage = error && error.message ? error.message : 'Something went wrong.';
                dispatch({ type: GET_PLANETS_REFRESH_FAILURE, payload: errorMessage });
                return [null, errorMessage];
            });
    };
}