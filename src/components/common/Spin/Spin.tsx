import BaseSpin, { SpinProps as BaseSpinProps } from 'antd/lib/spin'
import React, { memo } from 'react';

interface SpinProps extends BaseSpinProps {
}

export const Spin: React.FC<SpinProps> = (props) => (
    <BaseSpin {...props} />
);

export default memo(Spin);
