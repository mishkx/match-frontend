import BaseCard, { CardProps as BaseCardProps } from 'antd/lib/card'
import React, { memo } from 'react';

interface CardProps extends BaseCardProps {
}

export const Card: React.FC<CardProps> = (props) => (
    <BaseCard {...props} />
);

export default memo(Card);
