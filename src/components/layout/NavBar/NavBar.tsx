import { Icon } from 'antd';
import React, { memo } from 'react';
import { history } from 'src/utils';
import * as Styled from './styles';

export type NavBarProps = {
    children?: React.ReactNode;
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
};

export const NavBar: React.FC<NavBarProps> = ({ children, leftContent, rightContent }) => (
    <Styled.Wrapper>
        <Styled.Item>
            {leftContent}
        </Styled.Item>
        <Styled.Item>
            {children}
        </Styled.Item>
        <Styled.Item>
            {rightContent}
        </Styled.Item>
    </Styled.Wrapper>
);

// todo
NavBar.defaultProps = {
    leftContent: <Icon type={'left'} onClick={() => { history.goBack() }}/>,
};

export default memo(NavBar);
