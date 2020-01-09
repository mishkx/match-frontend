import {AxiosResponse} from "axios";

/**
 * entities
 */

export interface ProfileEntity {
    id: number;
    name: string;
    email: string;
    gender: string;
    bornOn: string | null;
    age: number | null;
    distance: number | null;
}

export interface RecommendedProfileEntity {
    id: number;
    name: string;
    gender: string;
    age: number | null;
    distance: number | null;
}

export interface ChosenProfileEntity extends RecommendedProfileEntity {
    isMatched: boolean;
}

/**
 * general
 */

type EmptyRequest = undefined;

export type ChoiceRequest = {
    id: number;
}

export type ErrorResponseServerData = {
    exception?: string,
    errors?: [string[]],
    message?: string,
}

export type ErrorResponseClientData = AxiosResponse<ErrorResponseServerData>;

export type FailureResponse = {
    status: number;
    message: string;
    description?: string;
}

/**
 * api
 */

/*
 * requests
 */

export type ChoiceLikeRequest = ChoiceRequest;

export type ChoiceDislikeRequest = ChoiceRequest;

export type ProfileInfoRequest = EmptyRequest;

export type RecommendationItemsRequest = EmptyRequest;

/*
 * responses
 */

export type ChoiceLikeResponse = ChosenProfileEntity;

export type ChoiceDislikeResponse = ChosenProfileEntity;

export type ProfileInfoResponse = ProfileEntity;

export type RecommendationItemsResponse = RecommendedProfileEntity[];
