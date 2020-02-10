import styled from 'src/themes';
import { NavLink } from '../../common';
import { PageWrapper } from '../Blocks';

export const ListWrapper = styled(PageWrapper)`
    .ant-list-split .ant-list-item {
        border-bottom: 1px solid ${props => props.theme.main.background};
    }
`;

export const ListItemNavLink = styled(NavLink)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 100%;
    color: ${props => props.theme.main.foreground};
    .ant-list-item-meta-title {
        color: ${props => props.theme.main.foreground};
    }
`;

export const ListItemDateTime = styled.div`
    font-size: 13px;
    color: ${props => props.theme.main.foregroundMuted};
`;
