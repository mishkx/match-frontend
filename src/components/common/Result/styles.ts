import styled from 'src/themes';
import Result from './Result';

export default styled(Result)`
    .ant-result-icon .anticon {
        color: ${props => props.theme.primary.background};
    }
`;
