export enum RequestTypes {
    REQUEST = 'REQUEST',
    SUCCESS = 'SUCCESS',
    FAILURE = 'FAILURE',
}

export type ActionType = string;

export type ActionPayload = any;

export interface ActionObject {
    type: ActionType;
    payload?: ActionPayload;
}

export type Action = (type: ActionType, payload?: ActionPayload) => ActionObject;

export type CreateRequestTypes = (base: string) => Record<RequestTypes, ActionType>;

export interface RequestAction {
    request: (...args: any) => ActionObject;
    success: (...args: any) => ActionObject;
    failure: (...args: any) => ActionObject;
}
