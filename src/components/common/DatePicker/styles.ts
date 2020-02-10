import styled from 'src/themes';
import DatePicker from './DatePicker';

export default styled(DatePicker)`
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
