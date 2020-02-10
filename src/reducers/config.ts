import { createReducer } from '@reduxjs/toolkit';
import { getAppConfig } from 'src/actions';
import { AppConfigState } from './types';

export const initialState: AppConfigState = {
    data: {
        chatMaxMessageContentLength: 0,
        socket: {
            broadcaster: null,
            options: {},
        },
        userGenderFemale: '',
        userGenderMale: '',
        userMaxAge: 0,
        userMaxDescriptionLength: 0,
        userMaxDistance: 0,
        userMaxNameLength: 0,
        userMaxPhotos: 0,
        userMinAge: 0,
        userMinDistance: 0,
    },
    isFetching: false,
    isLoaded: false,
};

export default createReducer(initialState, (builder) => builder
    .addCase(getAppConfig.request, (state) => {
        state.isFetching = true;
        state.isLoaded = false;
        delete state.error;
    })
    .addCase(getAppConfig.success, (state, action) => {
        state.isFetching = false;
        state.isLoaded = true;
        state.data = action.payload;
    })
    .addCase(getAppConfig.failure, (state, action) => {
        state.isFetching = false;
        state.isLoaded = false;
        state.error = action.payload;
    }),
);
