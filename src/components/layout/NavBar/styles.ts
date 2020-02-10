import styled from 'src/themes';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: 0 ${props => props.theme.all.blockPadding} ${props => props.theme.all.blockPadding};
`;

export const Item = styled.div`
    &, a {
        color: ${props => props.theme.main.foreground};
    }
`;
