import map from 'lodash/map';
import { ErrorResponseClientData, FailureResponse } from 'src/api';

export const parseErrorResponse = (response: ErrorResponseClientData): FailureResponse => {
    const message: FailureResponse['message'] = response.data.message || response.statusText;
    const newLine = ' \n';
    let description: FailureResponse['description'];

    switch (response.status) {
        case 403:
        case 500:
            description = response.data.exception || '';
            break;

        case 422:
            description = map(response.data.error, item => item.join(newLine)).join(newLine);
            break;

        default:
            description = '';
    }

    return {
        description,
        message,
        status: response.status,
    };
};
