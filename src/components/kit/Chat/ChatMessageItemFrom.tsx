import { Icon, List } from 'antd';
import React, { memo } from 'react';
import { ChatMessageCombined } from 'src/api/chat';
import { DATETIME_FORMAT } from 'src/constants';
import { isSendingMessage, moment } from 'src/utils';
import { MessageListItemFrom } from './styles';

type ChatMessageItemFromProps = {
    message: ChatMessageCombined;
};

// todo
const ChatMessageItemFrom: React.FC<ChatMessageItemFromProps> = ({ message }) => {
    let createdAt;
    let isSending;
    if (isSendingMessage(message)) {
        createdAt = message.sentAt;
        isSending = true;
    } else {
        createdAt = message.createdAt;
        isSending = false;
    }
    const descriptionHtml = (
        <>
            {moment(createdAt, DATETIME_FORMAT).format('LT')}
            {isSending && <Icon type={'clock-circle'} />}
        </>
    );
    return (
        <MessageListItemFrom>
            <List.Item.Meta
                title={message.content}
                description={descriptionHtml}
            />
        </MessageListItemFrom>
    );
};

export default memo(ChatMessageItemFrom);
