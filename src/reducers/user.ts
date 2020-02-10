import { createReducer } from '@reduxjs/toolkit';
import { deleteUserPhoto, getUser, updateUser, userPhotoUploaded } from 'src/actions';
import { UserState } from './types';

export const initialState: UserState = {
    isFetching: false,
    isLoaded: false,
    isUpdating: false,
};

export default createReducer(initialState, (builder) => builder
    .addCase(getUser.request, (state) => {
        state.isFetching = true;
        state.isLoaded = false;
        delete state.dataError;
    })
    .addCase(getUser.success, (state, action) => ({
        ...state,
        data: action.payload,
        isFetching: false,
        isLoaded: true,
        isUpdating: false,
    }))
    .addCase(getUser.failure, (state, action) => ({
        ...state,
        dataError: action.payload,
        isFetching: false,
        isLoaded: false,
    }))
    .addCase(updateUser.request, (state) => {
        state.isUpdating = true;
        delete state.dataError;
    })
    .addCase(updateUser.success, (state, action) => ({
        ...state,
        data: action.payload,
        isFetching: false,
        isLoaded: true,
        isUpdating: false,
    }))
    .addCase(updateUser.failure, (state, action) => ({
        ...state,
        isUpdating: false,
        updateError: action.payload,
    }))
    .addCase(userPhotoUploaded, (state, action) => {
        state.data?.photos.push(action.payload);
    })
    //todo: добавить другие этапы запроса
    .addCase(deleteUserPhoto.success, (state, action) => {
        if (state.data) {
            state.data.photos = action.payload;
        }
    }),
);
