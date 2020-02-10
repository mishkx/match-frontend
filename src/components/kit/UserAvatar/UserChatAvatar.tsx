import React, { memo } from 'react';
import { Badge } from '../../common';
import { UserChatAvatarProps } from './types';
import UserAvatar from './UserAvatar';

const UserChatAvatar: React.FC<UserChatAvatarProps> = (props) => (
    <Badge count={props.messagesCount}>
        <UserAvatar
            userId={props.userId}
            userName={props.userName}
            photoSrc={props.photoSrc}
        />
    </Badge>
);

export default memo(UserChatAvatar);
