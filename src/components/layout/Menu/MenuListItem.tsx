import React, { memo } from 'react';
import { Button, NavLink } from '../../common';

type MenuListItemProps = {
    icon: string;
    path: string;
}

export const MenuListItem: React.FC<MenuListItemProps> = (props) => (
    <NavLink to={props.path}>
        <Button icon={props.icon} shape={'circle'} />
    </NavLink>
);

export default memo(MenuListItem);
