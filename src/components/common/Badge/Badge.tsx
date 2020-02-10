import BaseBadge, { BadgeProps as BaseBadgeProps } from 'antd/lib/badge'
import React, { memo } from 'react';

interface BadgeProps extends BaseBadgeProps {
    children?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = (props) => (
    <BaseBadge {...props} />
);

export default memo(Badge);
