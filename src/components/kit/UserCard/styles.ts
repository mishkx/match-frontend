import styled from 'src/themes';
import { Card as BaseCard, CardMeta as BaseCardMeta } from '../../common';

export const Card = styled(BaseCard)`
    background: none;
    .ant-card-body {
        padding: 0;
    }
`;

export const CardMeta = styled(BaseCardMeta)`
    margin: ${props => props.theme.all.blockPadding} 0;
`;

export const CardMetaUserName = styled.span`
    font-size: 24px;
    font-weight: bold;
    margin-right: ${props => props.theme.all.blockPadding};
`;

export const CardMetaUserAge = styled.span`
    font-size: 24px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;
