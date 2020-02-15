
import { apiGetClient } from './client';

import { ApiResponse } from './Responses';
import { ApiError } from './Errors';


export const getPlanets = async (url = 'https://swapi.co/api/planets/', pageNo) => {
    try {
        const params = pageNo ? { page: pageNo } : undefined;

        const response = await apiGetClient(url, params);
        return new ApiResponse(response);
    } catch (error) {
        throw new ApiError(error);
    }
};


export default {
    getPlanets,
};
