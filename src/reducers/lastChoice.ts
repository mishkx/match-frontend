import { createReducer } from '@reduxjs/toolkit';
import { deleteLastChoice, dislike, like } from 'src/actions';
import { LastChoiceState } from './types';

export const initialState: LastChoiceState = {
    isFetching: false,
};

//todo: хранить все выборы, а не только последний
export default createReducer(initialState, (builder) => builder
    .addCase(dislike.request, (state) => {
        state.isFetching = true;
        delete state.error;
    })
    .addCase(dislike.success, (state, action) => {
        state.isFetching = false;
        state.data = action.payload;
    })
    .addCase(dislike.failure, (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
    })
    .addCase(like.request, (state) => {
        state.isFetching = true;
        delete state.error;
    })
    .addCase(like.success, (state, action) => {
        state.isFetching = false;
        state.data = action.payload;
    })
    .addCase(like.failure, (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
    })
    .addCase(deleteLastChoice, (state) => {
        delete state.data;
    }),
);
