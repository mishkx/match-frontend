import styled from 'src/themes';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    padding: 0 ${props => props.theme.all.blockPadding} ${props => props.theme.all.blockPadding};
`;
