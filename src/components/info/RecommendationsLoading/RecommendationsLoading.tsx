import React, { memo } from 'react';
import { Icon } from 'antd';
import { TFunction } from 'i18next';
import { Result } from '../../common';

type RecommendationsLoadingProps = {
    t: TFunction;
};

export const RecommendationsLoading: React.FC<RecommendationsLoadingProps> = ({ t }) => (
    <Result
        icon={<Icon type={'loading'}/>}
        title={t('Searching')}
    />
);

export default memo(RecommendationsLoading);
