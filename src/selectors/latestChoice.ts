import { createSelector, Selector } from 'reselect';
import { initialState } from '../reducers/latestChoice';
import { AppState, LatestChoiceState } from '../reducers/types';

export const selectProfile: Selector<AppState, LatestChoiceState> = (state) => state.latestChoice || initialState;

export const makeSelectLatestChoice = () => createSelector<AppState, LatestChoiceState, LatestChoiceState>(selectProfile, (state) => state);

