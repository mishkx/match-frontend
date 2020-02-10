import { createAction } from '@reduxjs/toolkit';
import {
    UserDataRequest,
    UserDataResponse,
    UserPhotoDeleteRequest,
    UserPhotoDeleteResponse,
    UserPhotoUploaded,
    UserUpdateRequest,
    UserUpdateResponse,
} from 'src/api';
import { createAsyncAction } from './helpers';

const USER_DATA_GET = 'USER_DATA_GET';
const USER_DATA_UPDATE = 'USER_DATA_UPDATE';
const USER_PHOTO_DELETE = 'USER_PHOTO_DELETE';
const USER_PHOTO_UPLOADED = 'USER_PHOTO_UPLOADED';

export const getUser = createAsyncAction<UserDataRequest, UserDataResponse>(USER_DATA_GET);

export const updateUser = createAsyncAction<UserUpdateRequest, UserUpdateResponse>(USER_DATA_UPDATE);

export const deleteUserPhoto = createAsyncAction<UserPhotoDeleteRequest, UserPhotoDeleteResponse>(USER_PHOTO_DELETE);

export const userPhotoUploaded = createAction<UserPhotoUploaded>(USER_PHOTO_UPLOADED);

export default {
    deleteUserPhoto,
    getUser,
    updateUser,
    userPhotoUploaded,
};
