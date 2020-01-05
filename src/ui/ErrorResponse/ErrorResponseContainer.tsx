import React, { ReactElement, useEffect } from 'react';
import NotificationError from '../uiKit/Notification/NotificationError';
import { ErrorResponseProps } from './types';

const ErrorResponseContainer: React.FC<ErrorResponseProps> = (props) => {
    const { children, error, showNotification } = props;

    useEffect(() => {
        if (showNotification && error) {
            NotificationError({
                message: error.message,
                description: error.description,
            })
        }
    }, [error, showNotification]);

    return children as ReactElement || null;
};

ErrorResponseContainer.defaultProps = {
    showNotification: true,
};

export default ErrorResponseContainer;
