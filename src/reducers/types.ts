import { RouterState } from 'connected-react-router';
import { ErrorData, ProfileEntity, RecommendedProfileEntity } from '../api/types';

export interface AppState {
    recommendation: RecommendationState;
    profile: ProfileState;
    router: RouterState;
}

export interface ProfileState {
    data?: ProfileEntity;
    error?: ErrorData;
    isFetching: boolean;
}

export type RecommendationResultState = RecommendedProfileEntity['id'][];

export interface RecommendationState {
    entities?: RecommendationEntitiesState;
    result?: RecommendationResultState;
    error?: ErrorData;
    isFetching: boolean;
}

export interface RecommendationEntitiesState {
    profiles: {
        [id: number]: RecommendedProfileEntity
    };
}
