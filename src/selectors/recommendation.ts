import { first, has } from 'lodash';
import { Selector, createSelector } from 'reselect';
import { initialState } from 'src/reducers/recommendation';
import { AppState, RecommendationState } from 'src/reducers/types';

export const recommendationStateSelector: Selector<AppState, RecommendationState> = (state) => {
    return state.recommendation || initialState;
};

export const selectRecommendationsState = createSelector(
    recommendationStateSelector,
    (state) => state,
);

export const selectRecommendationsCount = createSelector(
    selectRecommendationsState,
    (state) => state.result.length,
);

export const selectRecommendationFirstId = createSelector(
    selectRecommendationsState,
    (state) => first(state.result),
);

export const selectRecommendationUsers = createSelector(
    selectRecommendationsState,
    (state) => state.entities.users,
);

export const selectRecommendation = createSelector(
    [
        selectRecommendationFirstId,
        selectRecommendationUsers,
        selectRecommendationsCount,
    ],
    (id, users, count) => {
        return (count && typeof id === 'number' && has(users, id)) ? users[id] : undefined;
    },
);
