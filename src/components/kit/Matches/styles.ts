import styled from 'src/themes';
import { NavLink } from '../../common';

export const ListWrapper = styled.div`
    display: flex;
    overflow-y: auto;
    padding: ${props => props.theme.all.blockPadding} 0;
    flex-shrink: 0;
`;

export const List = styled.div`
    display: flex;
`;

export const ListItem = styled(NavLink)`
    &:first-child {
        margin-left: ${props => props.theme.all.blockPadding};
    }
    &:not(:last-child) {
        margin-right: ${props => props.theme.all.blockPadding};
    }
`;
