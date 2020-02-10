import React from 'react';

export type ErrorBoundaryProps = {
    FallbackComponent: React.ComponentType;
};

export type ErrorBoundaryState = {
    error: Error | null;
    info: React.ErrorInfo | null;
};

