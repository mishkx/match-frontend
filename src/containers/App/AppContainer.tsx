import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Content, Menu } from 'src/components/layout';
import { MENU } from 'src/constants';
import { light as theme } from 'src/themes';
import { ErrorBoundary, InitialContainer } from 'src/containers';
import './styles.css';

const AppContainer: React.FC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <ErrorBoundary>
                <Content>
                    <InitialContainer>
                        <Menu items={MENU}/>
                        {children}
                    </InitialContainer>
                </Content>
            </ErrorBoundary>
        </ThemeProvider>
    );
};

export default AppContainer;
