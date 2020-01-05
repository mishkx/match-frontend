import { createSelector, Selector } from 'reselect';
import { initialState } from '../reducers/recommendation';
import { AppState, RecommendationState } from '../reducers/types';

export const selectRecommendation: Selector<AppState, RecommendationState> = (state) => state.recommendation || initialState;

export const makeSelectRecommendation = () => createSelector<AppState, RecommendationState, RecommendationState>(selectRecommendation, (state) => state);
