import { assign, union, without } from 'lodash';
import { normalize } from 'normalizr';
import { createReducer } from '@reduxjs/toolkit';
import { deleteSingleMatch, getMatchCollection, matchCreated, matchDeleted, receiveMessage, sendMessage } from 'src/actions';
import { MatchCollectionUserItem } from 'src/api';
import { MatchSchema } from 'src/schemas';
import { MatchCollectionState, MatchEntitiesState, MatchResultState } from '../types';

export const initialState: MatchCollectionState = {
    entities: {
        users: {},
    },
    hasMoreItems: true,
    isFetching: false,
    result: [],
};

const deleteMatch = (state: MatchCollectionState, id: number): void => {
    state.result = without(state.result, id);
    delete state.entities.users[id];
};

export default createReducer(initialState, (builder) => builder
    .addCase(getMatchCollection.request, (state) => {
        state.isFetching = true;
        delete state.collectionError;
    })
    .addCase(getMatchCollection.success, (state, action) => {
        const data = normalize<MatchCollectionUserItem, MatchEntitiesState, MatchResultState>(
            action.payload, [MatchSchema],
        );
        state.entities.users = assign(state.entities.users, data.entities.users);
        state.hasMoreItems = data.result.length > 0;
        state.isFetching = false;
        state.result = union(state.result, data.result);
    })
    .addCase(getMatchCollection.failure, (state, action) => {
        state.collectionError = action.payload;
        state.isFetching = false;
    })
    .addCase(deleteSingleMatch.request, (state, action) => {
        if (state.entities.users[action.payload.id]) {
            state.entities.users[action.payload.id].isDeleting = true;
        }
        delete state.deleteError;
    })
    .addCase(deleteSingleMatch.success, (state, action) => {
        deleteMatch(state, action.payload.id);
        delete state.deleteError;
    })
    .addCase(deleteSingleMatch.failure, (state, action) => {
        state.deleteError = action.payload;
        delete state.entities.users[action.meta.id].isDeleting;
    })
    .addCase(matchCreated, (state, action) => {
        state.entities.users[action.payload.id] = action.payload;
        state.result = union(state.result, [action.payload.id]);
    })
    .addCase(matchDeleted, (state, action) => {
        deleteMatch(state, action.payload.id);
    })
    .addCase(sendMessage.success, (state, action) => {
        deleteMatch(state, action.meta.id);
    })
    .addCase(receiveMessage, (state, action) => {
        deleteMatch(state, action.payload.user.id);
    }),
);
