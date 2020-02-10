import styled from 'src/themes';
import Spin from './Spin';

export default styled(Spin)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .ant-spin-dot {
        font-size: 32px;
        width: auto;
        height: auto;
    }
    .ant-spin-dot-item {
        background-color: ${props => props.theme.primary.background};
        width: 1em;
        height: 1em;
    }
`;
