import React from 'react';
import { Result } from 'antd';
import { Button } from '../../components/common';

const ErrorBoundaryFallback: React.FC = () => {
    const handleReload = () => window.location.reload();
    return (
        <Result
            title={'500'}
            subTitle={'Something goes wrong'}
            extra={<Button onClick={handleReload}>Reload page</Button>}
            status={'500'}
        />
    );
};

export default ErrorBoundaryFallback;
