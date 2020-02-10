import { createReducer } from '@reduxjs/toolkit';
import { getMatchSingleItem } from 'src/actions';
import { MatchSingleState } from '../types';

export const initialState: MatchSingleState = {
    isFetching: false,
};

export default createReducer(initialState, (builder) => builder
    .addCase(getMatchSingleItem.request, (state) => {
        state.isFetching = true;
        delete state.error;
    })
    .addCase(getMatchSingleItem.success, (state, action) => {
        state.data = action.payload;
        state.isFetching = false;
        delete state.error;
    })
    .addCase(getMatchSingleItem.failure, (state, action) => {
        state.error = action.payload;
        state.isFetching = false;
    }),
);
