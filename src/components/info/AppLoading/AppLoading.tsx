import { Icon } from 'antd';
import React, { memo } from 'react';
import { Result } from '../../common';
import { Wrapper } from './styles';

export const AppLoading: React.FC = () => (
    <Wrapper>
        <Result
            icon={<Icon type={'heart'}/>}
            title={'MATCH'}
        />
    </Wrapper>
);

export default memo(AppLoading);
