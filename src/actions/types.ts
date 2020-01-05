import { AxiosResponse } from 'axios';
import { ErrorData } from '../api/types';

export type ActionType = string;

export type ActionPayload = any;

export type ActionObject<T = ActionPayload> = {
    type: ActionType;
    payload?: T;
}

export interface ActionCreator<T = ActionPayload> {
    readonly type: ActionType;
    readonly payload?: T;
    readonly action: ActionObject<T>;
    setPayload(payload: T): this;
}

export interface RequestAction<S = ActionPayload, E = ErrorData> {
    request: ActionCreator;
    success: ActionCreator<S>;
    error: ActionCreator<E>;
}

export enum RequestTypes {
    REQUEST = 'REQUEST',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
}

export type CreateRequestTypes = (base: string) => Record<RequestTypes, ActionType>;

export type ErrorResponseData = {
    exception?: string,
    errors?: [string[]],
    message?: string,
}

export type ErrorResponse = AxiosResponse<ErrorResponseData>;
