import omit from 'lodash/omit';
import { createReducer } from 'typesafe-actions';
import { dislike, like, removeLatest } from '../actions/choice';
import { LatestChoiceState } from './types';

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
    .handleAction([like.request, dislike.request], (state) => omit({
        ...state,
        isFetching: true,
    }, 'error'))
    .handleAction(removeLatest, (state) => omit({
        ...state,
        isFetching: false,
    }, 'data'));
