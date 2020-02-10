import { URL_USER, URL_USER_PHOTO } from 'src/constants';
import { deleteRequest, getRequest, putRequest } from 'src/utils';
import {
    UserDataResponse,
    UserPhotoDeleteRequest,
    UserPhotoDeleteResponse,
    UserUpdateRequest,
    UserUpdateResponse,
} from './types';

export const data = () => (
    getRequest<UserDataResponse>({
        url: URL_USER,
    })
);

export const update = (payload: UserUpdateRequest) => (
    putRequest<UserUpdateResponse>({
        data: payload,
        url: URL_USER,
    })
);

export const deletePhoto = (payload: UserPhotoDeleteRequest) => (
    deleteRequest<UserPhotoDeleteResponse>({
        params: payload,
        url: URL_USER_PHOTO,
    })
);

export default {
    data,
    deletePhoto,
    update,
};
