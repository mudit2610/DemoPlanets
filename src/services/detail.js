import { apiGetClient } from './client';

import { ApiResponse } from './Responses';
import { ApiError } from './Errors';


export const getDetail = async (url) => {
    try {
        const response = await apiGetClient(url);
        return new ApiResponse(response);
    } catch (error) {
        throw new ApiError(error);
    }
};


export default {
    getDetail,
};