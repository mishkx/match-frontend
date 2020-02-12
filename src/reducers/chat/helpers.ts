import { forEach, forIn, isArray, union, without } from 'lodash';
import { NormalizedSchema } from 'normalizr';
import { ChatMessageReceivedItem } from 'src/api/chat';
import { SchemaResultState } from '../types';
import { ChatListEntitiesState, ChatState } from './types';

export const combineEntitiesState = (
    state: ChatState,
    data: NormalizedSchema<ChatListEntitiesState, SchemaResultState<string>>,
): void => {
    state.entities.messages = {
        ...state.entities.messages,
        ...data.entities.messages,
    };
    state.result = union(state.result, isArray(data.result) ? data.result : [data.result]);

    forIn(data.entities.items, (value) => {
        const id = value.user.id;
        state.entities.items[id] = {
            ...value,
            messages: union(value.messages, state.entities.items[id]?.messages),
        };
        state.entities.state[id] = {
            ...state.entities.state[id],
            hasMoreItems: value.messages.length > 0,
            isFetching: false,
        };
    });
};

export const markMessagesAsRead = (state: ChatState, ids: number[]): void => {
    forEach(ids, (id) => {
        delete (state.entities.messages[id] as ChatMessageReceivedItem).isReceived;
    });
};

//todo: удалять сообщения с чатом
export const deleteChat = (state: ChatState, id: number): void => {
    state.result = without(state.result, id.toString());
    delete state.entities.items[id];
    delete state.entities.state[id];
};
