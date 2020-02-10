import map from 'lodash/map';
import { MomentFormatSpecification, MomentInput } from 'moment';
import { ChatMessageCombined, ChatMessageSendingItem, ErrorResponseClientData, FailureResponse } from 'src/api';
import moment from './moment';

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

export const xsrfToken = (): string => {
    return document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
};

type XsrfTokenHeader = {
    'X-CSRF-TOKEN': string;
};

export const xsrfTokenHeader = (): XsrfTokenHeader => ({
    'X-CSRF-TOKEN': xsrfToken(),
});

export const getRelativeDateTime = (inp: MomentInput, format: MomentFormatSpecification): string => {
    const momentObject = moment(inp, format).local();
    let toFormat;
    if (momentObject.isSame(moment(), 'day')) {
        toFormat = 'LT';
    } else if (momentObject.isAfter(moment().startOf('week'))) {
        toFormat = 'ddd';
    } else {
        toFormat = 'L';
    }
    return momentObject.format(toFormat);
};

export const isSendingMessage = (
    message: ChatMessageCombined,
): message is ChatMessageSendingItem => {
    return (message as ChatMessageSendingItem).isSending !== undefined;
};
