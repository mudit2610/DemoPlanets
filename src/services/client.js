import axios from 'axios';
import { ApiResponse } from './Responses';


export const apiGetClient = (url, parama, headers) => {

    const config = {
        // url: '/user',

        method: 'get',

        baseURL: url,

        params: parama,
        headers: headers,


    }

    return axios.request(config)

};


