import { createReducer } from 'typesafe-actions';
import { ProfileState } from './types';
import { info } from '../actions/profile';

export const initialState: ProfileState = {
    isFetching: false,
};

export default createReducer(initialState)
    .handleAction(info.success, (state, action) => ({
        ...state,
        data: action.payload,
        isFetching: false,
    }))
    .handleAction(info.failure, (state, action) => ({
        ...state,
        error: action.payload,
        isFetching: false,
    }))
    .handleAction(info.request, (state) => ({
        ...state,
        error: undefined,
        isFetching: true,
    }));
