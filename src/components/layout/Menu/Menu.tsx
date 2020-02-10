import React, { memo } from 'react';
import { MenuItem } from 'src/constants';
import * as Styled from './styles';
import MenuListItem from './MenuListItem';

type MenuProps = {
    items: MenuItem[];
}

export const Menu: React.FC<MenuProps> = ({ items }) => (
    <Styled.Wrapper>
        {items.map((item) => <MenuListItem key={item.id} icon={item.icon} path={item.path} />)}
    </Styled.Wrapper>
);

export default memo(Menu);
