import omit from 'lodash/omit';
import { createReducer } from 'typesafe-actions';
import { info, save } from '../actions/profile';
import { ProfileState } from './types';

export const initialState: ProfileState = {
    isFetching: false,
    isLoaded: false,
    isSaving: false,
};

export default createReducer(initialState)
    .handleAction([info.success, save.success], (state, action) => ({
        ...state,
        data: action.payload,
        isFetching: false,
        isLoaded: true,
        isSaving: false,
    }))
    .handleAction(info.failure, (state, action) => ({
        ...state,
        infoError: action.payload,
        isFetching: false,
        isLoaded: false,
    }))
    .handleAction(save.failure, (state, action) => ({
        ...state,
        isSaving: false,
        saveErrors: action.payload,
    }))
    .handleAction(save.request, (state) => omit({
        ...state,
        isSaving: true,
    }, ['saveErrors']))
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    .handleAction(info.request, (state) => omit({
        ...state,
        isFetching: true,
        isLoaded: false,
    }, ['infoErrors']));
