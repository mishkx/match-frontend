export enum AsyncRequestType {
    REQUEST = 'REQUEST',
    SUCCESS = 'SUCCESS',
    FAILURE = 'FAILURE',
}

export type AsyncRequestActionTypes = (base: string) => Record<AsyncRequestType, string>;
