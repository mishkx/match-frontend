import { EmptyRequest, FailureResponse, IdentifyType } from '../types';
import { UserItemPhoto } from '../user';

export type ChatItem = {
    unreadCount: number;
    updatedAt: string;
    user: ChatUserItem;
    messages: ChatMessageItem[];
}

export type ChatItemReceived = ChatItem & {
    messages: ChatMessageReceivedItem[];
}

export type ChatUserItem = {
    id: number;
    name: string;
    photo: UserItemPhoto | null;
}

export type ChatMessageItem = {
    id: number;
    userId: number;
    content: number;
    createdAt: string;
    editedAt: string | null;
    isDeleted: boolean;
}

export type ChatMessageSendingItem = {
    content: string;
    error?: FailureResponse;
    isSending: boolean;
    sentAt: string;
    token: string;
};

export type ChatMessageReceivedItem = ChatMessageItem & {
    isReceived: boolean;
};

export type ChatMessageCombined = ChatMessageItem | ChatMessageReceivedItem | ChatMessageSendingItem;

export type ChatCollectionRequest = {
    params?: {
        fromId?: number;
    };
}

export type ChatCollectionResponse = ChatItem[];

export type ChatSingleRequest = IdentifyType & {
    params?: {
        fromMessageId?: number;
    };
}

export type ChatSingleResponse = ChatItem;

export type ChatSendMessageRequest = IdentifyType & {
    data: {
        content: string;
        token: string;
        sentAt: string;
    };
}

export type ChatSendMessageResponse = ChatMessageItem & {
    token: string;
};

export type ChatSendPresenceRequest = IdentifyType & {
    messageIds: number[];
};

export type ChatSendPresenceResponse = EmptyRequest;
