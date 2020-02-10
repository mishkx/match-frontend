import React, { memo } from 'react';
import { Layout, Wrapper } from './styles';

type ContentProps = {
    children?: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
    return (
        <Wrapper>
            <Layout>
                {children}
            </Layout>
        </Wrapper>
    );
};

export default memo(Content);
