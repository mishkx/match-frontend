import React, { memo } from 'react';
import { NavLink } from '../../common';
import { Button } from './styles'

type BigNavButtonProps = {
    to: string;
    title: string;
    handleClick?: () => void;
}

export const BigNavButton: React.FC<BigNavButtonProps> = ({ handleClick, to, title }) => (
    <NavLink to={to}>
        <Button onClick={handleClick}>
            {title}
        </Button>
    </NavLink>
);

export default memo(BigNavButton);
