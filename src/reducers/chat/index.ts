import { omit, union, without } from 'lodash';
import { normalize } from 'normalizr';
import { createReducer } from '@reduxjs/toolkit';
import {
    deleteSingleMatch,
    getChatCollection,
    getChatSingleItem,
    matchDeleted,
    receiveMessage,
    sendMessage,
} from 'src/actions';
import { ChatItem } from 'src/api';
import { ChatSchema } from 'src/schemas';
import { SchemaResultState } from '../types';
import { ChatListEntitiesState, ChatState } from './types';
import { combineEntitiesState, deleteChat } from './helpers';

export const initialState: ChatState = {
    entities: {
        items: {},
        messages: {},
        sendingMessages: {},
        state: {},
    },
    hasMoreItems: true,
    isFetching: false,
    result: [],
};

export default createReducer(initialState, (builder) => builder
    .addCase(getChatCollection.request, (state, action) => {
        delete state.error;
        state.isFetching = true;
    })
    .addCase(getChatCollection.success, (state, action) => {
        const data = normalize<ChatItem, ChatListEntitiesState, SchemaResultState<string>>(
            action.payload, [ChatSchema],
        );
        delete state.error;
        state.isFetching = false;
        state.hasMoreItems = data.result.length > 0;
        combineEntitiesState(state, data);
    })
    .addCase(getChatCollection.failure, (state, action) => {
        state.error = action.payload;
        state.isFetching = false;
    })
    .addCase(getChatSingleItem.request, (state, action) => {
        state.entities.state[action.payload.id] = {
            ...state.entities.state[action.payload.id],
            isFetching: true,
        };
    })
    .addCase(getChatSingleItem.success, (state, action) => {
        const data = normalize<ChatItem, ChatListEntitiesState, SchemaResultState<string>>(
            action.payload, ChatSchema,
        );
        combineEntitiesState(state, data);
    })
    .addCase(getChatSingleItem.failure, (state, action) => {
        state.entities.state[action.meta.id] = {
            ...state.entities.state[action.meta.id],
            error: action.payload,
            isFetching: false,
        };
    })
    .addCase(sendMessage.request, (state, action) => {
        state.entities.items[action.payload.id].sendingMessages = union(
            state.entities.items[action.payload.id].sendingMessages,
            action.payload.data.token,
        );
        state.entities.sendingMessages[action.payload.data.token] = {
            ...action.payload.data,
            isSending: true,
        };
    })
    .addCase(sendMessage.success, (state, action) => {
        state.entities.items[action.meta.id] = {
            ...state.entities.items[action.meta.id],
            messages: union([action.payload.id], state.entities.items[action.meta.id].messages),
            sendingMessages: without(
                state.entities.items[action.meta.id].sendingMessages,
                action.payload.token,
            ),
        };
        state.entities.messages[action.payload.id] = action.payload;
        state.entities.sendingMessages = omit(state.entities.sendingMessages, action.payload.token);
    })
    .addCase(receiveMessage, (state, action) => {
        const data = normalize<ChatItem, ChatListEntitiesState, SchemaResultState<string>>(
            action.payload, ChatSchema,
        );
        combineEntitiesState(state, data);
    })
    .addCase(deleteSingleMatch.success, (state, action) => {
        deleteChat(state, action.payload.id);
    })
    .addCase(matchDeleted, (state, action) => {
        deleteChat(state, action.payload.id);
    }),
);
