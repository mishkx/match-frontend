import { Layout as BaseLayout } from 'antd';
import styled from 'src/themes';

export const Wrapper = styled(BaseLayout)`
    align-items: center;
    background-color: ${props => props.theme.all.layoutBackground};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const Layout = styled.div`
    padding-top: ${props => props.theme.all.blockPadding};
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 414px;
    box-shadow: 0 0 10px 0 #8E8E8E;
    @media (max-width: 414px) {
        width: 100%;
    }
`;
