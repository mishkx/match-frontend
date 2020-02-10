import BaseCard, { CardMetaProps as BaseCardMetaProps } from 'antd/lib/card'
import React, { memo } from 'react';

interface CardMetaProps extends BaseCardMetaProps {
}

export const CardMeta: React.FC<CardMetaProps> = (props) => (
    <BaseCard.Meta {...props} />
);

export default memo(CardMeta);
