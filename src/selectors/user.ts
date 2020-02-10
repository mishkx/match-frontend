import { Selector, createSelector } from 'reselect';
import { UserItem } from 'src/api';
import { AppState, UserState } from 'src/reducers/types';
import { initialState } from 'src/reducers/user';

export const userStateSelector: Selector<AppState, UserState> = (state) => state.user || initialState;

export const selectUserState = createSelector<AppState, UserState, UserState>(
    userStateSelector,
    (state) => state,
);

export const selectUser = createSelector<AppState, UserState, UserItem | undefined>(
    selectUserState,
    (state) => !state.isFetching && state.isLoaded && state.data ? state.data : undefined,
);
