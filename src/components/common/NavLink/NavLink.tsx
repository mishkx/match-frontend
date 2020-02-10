import { NavLink as BaseNavLink, NavLinkProps as BaseNavLinkProps } from 'react-router-dom'
import React, { memo } from 'react';

interface NavLinkProps extends BaseNavLinkProps {
}

export const NavLink: React.FC<NavLinkProps> = (props) => (
    <BaseNavLink {...props} />
);

export default memo(NavLink);
