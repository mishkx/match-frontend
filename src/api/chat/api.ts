import { URL_CHAT, URL_CHAT_SEND_MESSAGE, URL_CHAT_SINGLE } from 'src/constants';
import { getRequest, postRequest } from 'src/utils';
import {
    ChatCollectionRequest,
    ChatCollectionResponse,
    ChatSendMessageRequest,
    ChatSendMessageResponse,
    ChatSingleRequest,
    ChatSingleResponse,
} from './types';

export const collection = (payload: ChatCollectionRequest) => (
    getRequest<ChatCollectionResponse>({
        params: payload.params,
        url: URL_CHAT,
    })
);

export const sendMessage = (payload: ChatSendMessageRequest) => (
    postRequest<ChatSendMessageResponse>({
        data: payload.data,
        url: URL_CHAT_SEND_MESSAGE(payload.id),
    })
);

export const single = (payload: ChatSingleRequest) => (
    getRequest<ChatSingleResponse>({
        params: payload.params,
        url: URL_CHAT_SINGLE(payload.id),
    })
);

export default {
    collection,
    sendMessage,
    single,
};
