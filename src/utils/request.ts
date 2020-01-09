import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { parseErrorResponse } from './helpers';
import { IS_DEV } from '../constants/settings';
import { ErrorResponseServerData } from '../api/types';

axios.defaults.method = 'get';
axios.defaults.responseType = 'json';

const request = <T>(config: AxiosRequestConfig) => {
    return axios.request<T>(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error: AxiosError<ErrorResponseServerData>) {
            if (error.response) {
                throw parseErrorResponse(error.response);
            }
        });
};

export const requestGet = <T>(config: AxiosRequestConfig) => {
    return request<T>({
        ...config,
        method: 'get',
    });
};

export const requestPost = <T>(config: AxiosRequestConfig) => {
    return request<T>({
        ...config,
        method: 'post',
    });
};

if (IS_DEV) {
    (window as any).axios = axios;
}

export default request;
