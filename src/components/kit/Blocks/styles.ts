import styled from 'src/themes';

export const PageWrapper = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    padding:
      0 ${props => props.theme.all.blockPadding}
      ${props => props.theme.all.blockPadding}
      ${props => props.theme.all.blockPadding};
`;
