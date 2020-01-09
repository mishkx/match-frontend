import { createReducer } from 'typesafe-actions';
import { LatestChoiceState } from './types';
import { like, dislike, removeLatest } from '../actions/choice';

export const initialState: LatestChoiceState = {
    isFetching: false,
};

export default createReducer(initialState)
    .handleAction([like.success, dislike.success], (state, action) => ({
        ...state,
        data: action.payload,
        isFetching: false,
    }))
    .handleAction([like.failure, dislike.failure], (state, action) => ({
        ...state,
        error: action.payload,
        isFetching: false,
    }))
    .handleAction([like.request, dislike.request], (state, action) => ({
        ...state,
        error: undefined,
        isFetching: true,
    }))
    .handleAction(removeLatest, (state) => ({
        ...state,
        data: undefined,
        isFetching: false,
    }));
