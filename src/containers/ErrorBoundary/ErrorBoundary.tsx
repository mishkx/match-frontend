import React  from 'react';
import ErrorBoundaryFallback from './ErrorBoundaryFallback';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    static defaultProps = {
        FallbackComponent: ErrorBoundaryFallback,
    };

    state = {
        error: null,
        info: null,
    };

    componentDidCatch(error: Error, info: React.ErrorInfo): void {
        this.setState({ error, info });
    }

    render() {
        const { children, FallbackComponent } = this.props;
        const { error } = this.state;

        if (error !== null) {
            return (
                <FallbackComponent/>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
