import styled from 'src/themes';
import Input from './Input';

export default styled(Input)`
    input {
        color: ${props => props.theme.main.foreground};
        background-color: ${props => props.theme.main.background};
        font-size: ${props => props.theme.all.controlFontSize};
        border: none;
        &:focus {
            box-shadow: none;
        }
    }
`;
