import { Selector, createSelector } from 'reselect';
import { initialState as collectionInitialState } from 'src/reducers/match/collection';
import { initialState as singleInitialState } from 'src/reducers/match/single';
import { AppState, MatchCollectionState, MatchSingleState } from 'src/reducers/types';

export const matchInfoStateSelector: Selector<AppState, MatchSingleState> = (state) => {
    return state.match.single || singleInitialState;
};

export const selectMatchInfoState = createSelector<AppState, MatchSingleState, MatchSingleState>(
    matchInfoStateSelector,
    (state) => state,
);

export const matchItemsStateSelector: Selector<AppState, MatchCollectionState> = (state) => {
    return state.match.collection || collectionInitialState;
};

export const selectMatchItemsState = createSelector<AppState, MatchCollectionState, MatchCollectionState>(
    matchItemsStateSelector,
    (state) => state,
);
