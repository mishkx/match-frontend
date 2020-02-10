import styled from 'src/themes';
import Avatar from './Avatar';

export default styled(Avatar)`
    background-color: ${props => props.theme.main.background};
    color: ${props => props.theme.main.foreground};
`;
