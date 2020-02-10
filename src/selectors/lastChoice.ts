import { Selector, createSelector } from 'reselect';
import { initialState } from '../reducers/latestChoice';
import { AppState, LatestChoiceState } from '../reducers/types';

export const latestChoiceStateSelector: Selector<AppState, LatestChoiceState> = (state) => {
    return state.latestChoice || initialState;
};

export const selectLatestChoiceState = createSelector(
    latestChoiceStateSelector,
    (state) => state,
);

export const selectMatchedUser = createSelector(
    latestChoiceStateSelector,
    (state) => !state.isFetching && state.data?.isMatched ? state.data : null,
);
