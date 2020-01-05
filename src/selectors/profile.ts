import { createSelector, Selector } from 'reselect';
import { initialState } from '../reducers/profile';
import { AppState, ProfileState } from '../reducers/types';

export const selectProfile: Selector<AppState, ProfileState> = (state) => state.profile || initialState;

export const makeSelectProfile = () => createSelector<AppState, ProfileState, ProfileState>(selectProfile, (state) => state);
