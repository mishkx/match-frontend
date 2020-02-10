import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { ErrorResponseServerData } from 'src/api';
import { IS_DEV } from 'src/constants';
import { parseErrorResponse } from './helpers';

axios.defaults.method = 'get';
axios.defaults.responseType = 'json';

const request = <T>(config: AxiosRequestConfig) => {
    return axios.request<T>(config)
        .then(response => response.data)
        .catch((error: AxiosError<ErrorResponseServerData>) => {
            if (error.response) {
                throw parseErrorResponse(error.response);
            }
        });
};

export const getRequest = <T>(config: AxiosRequestConfig) => request({
    method: 'get',
    ...config,
});

export const postRequest = <T>(config: AxiosRequestConfig) => request({
    method: 'post',
    ...config,
});

export const putRequest = <T>(config: AxiosRequestConfig) => request({
    method: 'put',
    ...config,
});

export const deleteRequest = <T>(config: AxiosRequestConfig) => request({
    method: 'delete',
    ...config,
});

export default request;
