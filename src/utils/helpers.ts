import { ErrorResponse } from '../actions/types';
import { ErrorData } from '../api/types';
import map from 'lodash/map';

export const parseErrorResponse = (response: ErrorResponse): ErrorData => {
    const message: ErrorData['message'] = response.data.message || response.statusText;
    let description: ErrorData['description'];

    switch (response.status) {
        case 403:
        case 500:
            description = response.data.exception || '';
            break;

        case 422:
            description = map(response.data.errors, item => item.join(" \n")).join(" \n");
            break;

        default:
            description = '';
    }

    return {
        status: response.status,
        message,
        description,
    };
};
