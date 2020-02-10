import styled from 'src/themes';
import { NavLink } from '../index';
import Button from './Button';

export default styled(Button)`
    color: ${props => props.theme.main.foreground};
    background-color: ${props => props.theme.main.background};
    border-radius: ${props => props.theme.all.borderRadius};
    font-size: ${props => props.theme.all.controlFontSize};
    border: none;
    outline: none;
    
    &:hover {
        color: ${props => props.theme.main.foreground};
        background-color: ${props => props.theme.main.backgroundActive};
    }
    
    ${NavLink}[aria-current] & {
        color: ${(props) => props.theme.primary.foreground};
        background-color: ${(props) => props.theme.primary.background};
    }
}
`;

