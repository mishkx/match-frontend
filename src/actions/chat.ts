import { createAction } from '@reduxjs/toolkit';
import {
    ChatCollectionRequest,
    ChatCollectionResponse,
    ChatItemReceived,
    ChatSendMessageRequest,
    ChatSendMessageResponse,
    ChatSendPresenceRequest,
    ChatSendPresenceResponse,
    ChatSingleRequest,
    ChatSingleResponse,
} from 'src/api';
import { createAsyncAction, createAsyncActionWithMeta } from './helpers';

const CHAT_COLLECTION_GET = 'CHAT_COLLECTION_GET';
const CHAT_MESSAGE_RECEIVE = 'CHAT_MESSAGE_RECEIVE';
const CHAT_MESSAGE_SEND = 'CHAT_MESSAGE_SEND';
const CHAT_MESSAGE_TYPE = 'CHAT_MESSAGE_TYPE';
const CHAT_SINGLE_GET = 'CHAT_SINGLE_GET';
const CHAT_SINGLE_PRESENCE = 'CHAT_SINGLE_PRESENCE';

export const getChatCollection = createAsyncAction<ChatCollectionRequest,
    ChatCollectionResponse>(CHAT_COLLECTION_GET);

export const receiveMessage = createAction<ChatItemReceived>(CHAT_MESSAGE_RECEIVE);

export const sendMessage = createAsyncActionWithMeta<ChatSendMessageRequest,
    ChatSendMessageResponse>(CHAT_MESSAGE_SEND);

export const sendPresence = createAsyncActionWithMeta<ChatSendPresenceRequest,
    ChatSendPresenceResponse>(CHAT_SINGLE_PRESENCE);

export const getChatSingleItem = createAsyncActionWithMeta<ChatSingleRequest, ChatSingleResponse>(CHAT_SINGLE_GET);

export const typeMessage = createAction(CHAT_MESSAGE_TYPE, (userId: number, content: string) => ({
    payload: {
        content,
        userId,
    },
}));

export default {
    getChatCollection,
    getChatSingleItem,
    receiveMessage,
    sendMessage,
    sendPresence,
    typeMessage,
};
