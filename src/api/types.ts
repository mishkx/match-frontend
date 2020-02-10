import { AxiosResponse } from 'axios';

export type EmptyRequest = undefined;

export type IdentifyType = {
    id: number;
}

export type ErrorResponseServerData = {
    exception?: string;
    error?: [string[]];
    message?: string;
}

export type ErrorResponseClientData = AxiosResponse<ErrorResponseServerData>;

export type FailureResponse = {
    status: number;
    message: string;
    description?: string;
}
