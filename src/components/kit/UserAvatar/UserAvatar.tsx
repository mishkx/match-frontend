import React, { memo } from 'react';
import { Avatar } from '../../common';
import { UserAvatarProps } from './types';

const UserAvatar: React.FC<UserAvatarProps> = (props) => {
    const firstLetter = props.userName.substr(0, 1).toUpperCase();

    return (
        <Avatar
            size={'large'}
            children={!props.photoSrc ? firstLetter : undefined}
            src={props.photoSrc}
        />
    )
};

export default memo(UserAvatar);
