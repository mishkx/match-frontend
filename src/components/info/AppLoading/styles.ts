import styled from 'src/themes';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    
    .ant-result-title {
        color: ${props => props.theme.primary.background};
        font-weight: bold;
        font-style: italic;
    }
`;
