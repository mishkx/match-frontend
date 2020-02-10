import { Selector, createSelector } from 'reselect';
import { initialState } from '../reducers/profile';
import { AppState, ProfileState } from '../reducers/types';
import { ProfileEntity } from '../api/types';

export const profileStateSelector: Selector<AppState, ProfileState> = (state) => state.profile || initialState;

export const selectProfileState = createSelector<AppState, ProfileState, ProfileState>(
    profileStateSelector,
    (state) => state,
);

export const selectProfile = createSelector<AppState, ProfileState, ProfileEntity | null>(
    selectProfileState,
    (state) => !state.isFetching && state.data ? state.data : null,
);
