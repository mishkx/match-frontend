import { Selector, createSelector } from 'reselect';
import { initialState } from 'src/reducers/lastChoice';
import { AppState, LastChoiceState } from 'src/reducers/types';

export const lastChoiceStateSelector: Selector<AppState, LastChoiceState> = (state) => {
    return state.lastChoice || initialState;
};

export const selectLastChoiceState = createSelector(
    lastChoiceStateSelector,
    (state) => state,
);

export const selectMatchedUser = createSelector(
    lastChoiceStateSelector,
    (state) => !state.isFetching && state.data?.isMatched ? state.data : null,
);
