import { List } from 'antd';
import React, { memo } from 'react';
import { ChatMessageItem } from 'src/api/chat';
import { DATETIME_FORMAT } from 'src/constants';
import { moment } from 'src/utils';
import { MessageListItemTo } from './styles';

type ChatMessageItemToProps = {
    message: ChatMessageItem;
};

const ChatMessageItemTo: React.FC<ChatMessageItemToProps> = ({ message }) => (
    <MessageListItemTo>
        <List.Item.Meta
            title={message.content}
            description={moment(message.createdAt, DATETIME_FORMAT).format('LT')}
        />
    </MessageListItemTo>
);

export default memo(ChatMessageItemTo);
