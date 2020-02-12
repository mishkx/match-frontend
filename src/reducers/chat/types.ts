import {
    ChatMessageItem,
    ChatMessageReceivedItem,
    ChatMessageSendingItem,
    ChatUserItem,
    FailureResponse,
} from 'src/api';
import { FetchingState, SchemaResultState } from '../types';

export interface ChatState extends FetchingState {
    entities: ChatListEntitiesState;
    result: SchemaResultState<string>;
    error?: FailureResponse;
    hasMoreItems: boolean;
}

export type ChatListEntitiesState = {
    items: {
        [id: number]: ChatListEntityData;
    };
    messages: {
        [id: number]: ChatMessageItem | ChatMessageReceivedItem;
    };
    sendingMessages: {
        [token: string]: ChatMessageSendingItem;
    };
    state: {
        [id: number]: ChatListItemState;
    };
}

export type ChatListEntityData = {
    unreadCount: number;
    updatedAt: string;
    user: ChatUserItem;
    messages: SchemaResultState;
    sendingMessages: SchemaResultState<string>;
};

export type ChatListItemState = FetchingState & {
    hasMoreItems?: boolean;
    message?: string;
    error?: FailureResponse;
}
