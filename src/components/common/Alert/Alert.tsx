import BaseAlert, { AlertProps as BaseAlertProps } from 'antd/lib/alert'
import React, { memo } from 'react';

interface AlertProps extends BaseAlertProps {
}

export const Alert: React.FC<AlertProps> = (props) => (
    <BaseAlert {...props} />
);

export default memo(Alert);
