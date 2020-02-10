import { Result } from 'antd';
import { TFunction } from 'i18next';
import React, { memo } from 'react';
import { PATH_RECOMMENDATIONS } from 'src/constants';
import { BigNavButton } from '../../kit';

type NotFoundProps = {
    t: TFunction;
};

export const NotFound: React.FC<NotFoundProps> = ({ t }) => (
    <Result
        title={'404'}
        subTitle={t('Page not found')}
        extra={<BigNavButton to={PATH_RECOMMENDATIONS} title={t('Go to recommendations')} />}
        status={'404'}
    />
);

export default memo(NotFound);
