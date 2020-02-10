import React, { memo } from 'react';
import { Badge } from '../../common';
import UserAvatar from './UserAvatar';
import { UserMatchedAvatarProps } from './types';

const UserMatchedAvatar: React.FC<UserMatchedAvatarProps> = (props) => (
    <Badge dot={props.isVisited}>
        <UserAvatar
            userId={props.userId}
            userName={props.userName}
            photoSrc={props.photoSrc}
        />
    </Badge>
);

export default memo(UserMatchedAvatar);
