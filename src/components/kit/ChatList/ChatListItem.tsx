import { List } from 'antd';
import React, { memo } from 'react';
import { UserChatAvatar } from 'src/components/kit';
import { ChatMessageItem, ChatUserItem } from 'src/api/chat';
import { DATETIME_FORMAT, PATH_MATCHES_CHAT } from 'src/constants';
import { getRelativeDateTime } from 'src/utils';
import * as Styled from './styles';

type ChatListItemProps = {
    lastMessage?: ChatMessageItem;
    unreadCount: number;
    user: ChatUserItem;
};

const ChatListItem: React.FC<ChatListItemProps> = ({ lastMessage, unreadCount, user }) => (
    <List.Item>
        <Styled.ListItemNavLink
            to={PATH_MATCHES_CHAT(user.id)}
        >
            <List.Item.Meta
                avatar={
                    <UserChatAvatar
                        userId={user.id}
                        userName={user.name}
                        photoSrc={user.photo?.thumb}
                        messagesCount={unreadCount}
                    />
                }
                title={user.name}
                description={lastMessage && lastMessage.content}
            />
            <Styled.ListItemDateTime>
                {lastMessage && getRelativeDateTime(lastMessage.createdAt, DATETIME_FORMAT)}
            </Styled.ListItemDateTime>
        </Styled.ListItemNavLink>
    </List.Item>
);

export default memo(ChatListItem);
