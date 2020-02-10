import React, { memo } from 'react';
import { ChatMessageCombined } from 'src/api';
import { isSendingMessage } from 'src/utils';
import { ChatMessageItemFrom, ChatMessageItemTo } from './index';

type ChatMessageProps = {
    currentUserId: number;
    message: ChatMessageCombined;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ currentUserId, message }) => {
    if (isSendingMessage(message) || currentUserId === message.userId) {
        return (
            <ChatMessageItemFrom
                message={message}
            />
        );
    }
    return (
        <ChatMessageItemTo
            message={message}
        />
    );
};

export default memo(ChatMessage);
