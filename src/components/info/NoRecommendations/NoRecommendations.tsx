import { Icon, Result } from 'antd';
import { TFunction } from 'i18next';
import React, { memo } from 'react';
import { PATH_PROFILE_EDIT } from 'src/constants';
import { BigNavButton } from '../../kit';

type NoRecommendationsProps = {
    t: TFunction;
};

export const NoRecommendations: React.FC<NoRecommendationsProps> = ({ t }) => (
    <Result
        icon={<Icon type={'user'}/>}
        title={t('There is no one near you')}
        subTitle={t('Try to change your search options')}
        extra={<BigNavButton to={PATH_PROFILE_EDIT} title={t('Go to settings')} />}
    />
);

export default memo(NoRecommendations);
