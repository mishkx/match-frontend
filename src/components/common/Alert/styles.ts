import styled from 'src/themes';
import Alert from './Alert';

export default styled(Alert)`
    border: none;
    &.ant-alert-error {
        background-color: ${props => props.theme.danger.background};
        .ant-alert-message {
            color: ${props => props.theme.danger.foreground};
        }
    }
`;
