import BaseAvatar, { AvatarProps as BaseAvatarProps } from 'antd/lib/avatar'
import React, { memo } from 'react';

interface AvatarProps extends BaseAvatarProps {
}

export const Avatar: React.FC<AvatarProps> = (props) => (
    <BaseAvatar {...props} />
);

export default memo(Avatar);
