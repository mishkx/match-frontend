import { RouterState } from 'connected-react-router';
import {
    AppConfig,
    ChosenUserItem,
    FailureResponse,
    MatchCollectionUserItem,
    RecommendedUserItem,
    UserItem,
} from 'src/api';
import {
    ChatState,
} from './chat/types';

export type FetchingState = {
    isFetching: boolean;
};

export type SchemaResultState<T = number> = T[];

export interface AppState {
    chat: ChatState;
    config: AppConfigState;
    lastChoice: LastChoiceState;
    match: MatchState;
    recommendation: RecommendationState;
    router: RouterState;
    user: UserState;
}

export interface AppConfigState {
    data: AppConfig;
    error?: FailureResponse;
    isFetching: boolean;
    isLoaded: boolean;
}

export interface LastChoiceState extends FetchingState {
    data?: ChosenUserItem;
    error?: FailureResponse;
}

export interface MatchState {
    collection: MatchCollectionState;
    single: MatchSingleState;
}

export interface MatchCollectionState extends FetchingState {
    entities: MatchEntitiesState;
    result: MatchResultState;
    collectionError?: FailureResponse;
    deleteError?: FailureResponse;
    hasMoreItems: boolean;
}

export interface MatchSingleState extends FetchingState {
    data?: ChosenUserItem;
    error?: FailureResponse;
}

export type MatchEntitiesState = {
    users: {
        [id: number]: MatchCollectionUserItem & {
            isDeleting?: boolean;
        };
    };
}

export type MatchResultState = ChosenUserItem['id'][];

export interface UserState extends FetchingState {
    data?: UserItem;
    dataError?: FailureResponse;
    updateError?: FailureResponse;
    isLoaded: boolean;
    isUpdating: boolean;
}

export interface RecommendationState extends FetchingState {
    entities: RecommendationEntitiesState;
    result: RecommendationResultState;
    error?: FailureResponse;
    hasMoreItems: boolean;
}

export type RecommendationEntitiesState = {
    users: {
        [id: number]: RecommendedUserItem;
    };
}

export type RecommendationResultState = RecommendedUserItem['id'][];
