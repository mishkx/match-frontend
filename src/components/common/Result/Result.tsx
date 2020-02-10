import BaseResult, { ResultProps as BaseResultProps } from 'antd/lib/result'
import React, { memo } from 'react';

export interface ResultProps extends BaseResultProps {
}

export const Result: React.FC<ResultProps> = (props) => (
    <BaseResult {...props} />
);

export default memo(Result);
