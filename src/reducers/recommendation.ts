import { omit, without } from 'lodash';
import { normalize, schema } from 'normalizr';
import { createReducer } from 'typesafe-actions';
import { RecommendationEntitiesState, RecommendationResultState, RecommendationState } from './types';
import { items, remove } from '../actions/recommendation';
import { RecommendedProfileEntity } from '../api/types';

export const initialState: RecommendationState = {
    entities: {
        profiles: {},
    },
    result: [],
    isFetching: false,
};

export default createReducer(initialState)
    .handleAction(remove, (state, action) => {
        if (!action.payload?.id) {
            return state;
        }
        return {
            ...state,
            entities: {
                ...state.entities,
                profiles: {...omit(state.entities.profiles, [action.payload.id])}
            },
            result: [...without(state.result, action.payload.id)],
        };
    })
    .handleAction(items.success, (state, action) => ({
        ...state,
        ...normalize<RecommendedProfileEntity, RecommendationEntitiesState, RecommendationResultState>(
            action.payload,
            [new schema.Entity('profiles')]
        ),
        isFetching: false,
    }))
    .handleAction(items.failure, (state, action) => ({
        ...state,
        error: action.payload,
        isFetching: false,
    }))
    .handleAction(items.request, (state, action) => ({
        ...state,
        error: undefined,
        isFetching: true,
    }));
