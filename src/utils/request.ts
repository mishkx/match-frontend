import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { parseErrorResponse } from './helpers';
import { IS_DEV } from '../constants/settings';
import { ErrorResponse } from '../actions/types';

axios.defaults.method = 'get';
axios.defaults.responseType = 'json';

const request = <T>(config: AxiosRequestConfig) => {
    return axios.request<T>(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error: AxiosError<ErrorResponse>) {
            throw parseErrorResponse(error.response as ErrorResponse);
        });
};

if (IS_DEV) {
    (window as any).axios = axios;
}

export default request;
