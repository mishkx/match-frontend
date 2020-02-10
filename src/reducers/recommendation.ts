import { assign, omit, union, without } from 'lodash';
import { normalize } from 'normalizr';
import { createReducer } from '@reduxjs/toolkit';
import { deleteRecommendation, getRecommendationCollection } from 'src/actions';
import { RecommendedUserItem } from 'src/api';
import { RECOMMENDATION_MIN_ITEMS } from 'src/constants';
import { RecommendationSchema } from 'src/schemas';
import { RecommendationEntitiesState, RecommendationResultState, RecommendationState } from './types';

export const initialState: RecommendationState = {
    entities: {
        users: {},
    },
    hasMoreItems: true,
    isFetching: false,
    result: [],
};

export default createReducer(initialState, (builder) => builder
    .addCase(deleteRecommendation, (state, action) => {
        state.entities.users = omit(state.entities.users, action.payload.id);
        state.result = without(state.result, action.payload.id);
    })
    .addCase(getRecommendationCollection.request, (state) => {
        state.isFetching = true;
        delete state.error;
    })
    .addCase(getRecommendationCollection.success, (state, action) => {
        const data = normalize<RecommendedUserItem, RecommendationEntitiesState, RecommendationResultState>(
            action.payload, [RecommendationSchema],
        );
        state.entities.users = assign(state.entities.users, data.entities.users);
        state.result = union(state.result, data.result);
        state.hasMoreItems = data.result.length >= RECOMMENDATION_MIN_ITEMS;
        state.isFetching = false;
    })
    .addCase(getRecommendationCollection.failure, (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
    }),
);
