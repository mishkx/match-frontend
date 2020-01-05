import { normalize, schema } from 'normalizr';
import { RecommendationEntitiesState, RecommendationResultState, RecommendationState } from './types';
import { items } from '../actions/recommendation';
import { RecommendedProfileEntity } from '../api/types';

export const initialState: RecommendationState = {
    isFetching: false,
};

type ActionType = typeof items.success.action & typeof items.error.action;

export default (state: Readonly<RecommendationState> = initialState, action: ActionType): RecommendationState => {
    switch (action.type) {
        case items.request.type:
            return {
                ...state,
                error: undefined,
                isFetching: true,
            };

        case items.success.type:
            return {
                ...state,
                ...normalize<RecommendedProfileEntity, RecommendationEntitiesState, RecommendationResultState>(
                    action.payload,
                    [new schema.Entity('profiles')]
                ),
                isFetching: false,
            };

        case items.error.type:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            };
    }

    return state;
};
