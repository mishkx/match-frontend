import { RouterState } from 'connected-react-router';
import { FailureResponse, ChosenProfileEntity, ProfileEntity, RecommendedProfileEntity } from '../api/types';

export interface AppState {
    latestChoice: LatestChoiceState;
    recommendation: RecommendationState;
    profile: ProfileState;
    router: RouterState;
}

export interface ProfileState {
    data?: ProfileEntity;
    error?: FailureResponse;
    isFetching: boolean;
}

export interface RecommendationState {
    entities: RecommendationEntitiesState;
    result: RecommendationResultState;
    error?: FailureResponse;
    isFetching: boolean;
}

export interface LatestChoiceState {
    data?: ChosenProfileEntity;
    error?: FailureResponse;
    isFetching: boolean;
}

export type RecommendationEntitiesState = {
    profiles: {
        [id: number]: RecommendedProfileEntity
    };
}

export type RecommendationResultState = RecommendedProfileEntity['id'][];
