import React, { memo } from 'react';
import { NavLink } from '../../common';
import { Button } from './styles'

type BigNavButtonProps = {
    to: string;
    title: string;
}

export const BigNavButton: React.FC<BigNavButtonProps> = ({ to, title }) => (
    <NavLink to={to}>
        <Button>
            {title}
        </Button>
    </NavLink>
);

export default memo(BigNavButton);
