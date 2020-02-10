import styled from 'src/themes';
import TextArea from './TextArea';

export default styled(TextArea)`
    color: ${props => props.theme.main.foreground};
    background-color: ${props => props.theme.main.background};
    font-size: ${props => props.theme.all.controlFontSize};
    border-radius: ${props => props.theme.all.borderRadius};
    border: none;
    &:focus, &:hover {
        box-shadow: none;
    }
`;
