import styled from 'src/themes';
import BaseCard from './Card';
import BaseCardMeta from './CardMeta';

export const Card = styled(BaseCard)`
    .ant-card-body {
        color: ${props => props.theme.main.foreground};
        border-radius: ${props => props.theme.all.borderRadius};
    }
`;

export const CardMeta = styled(BaseCardMeta)`
    .ant-card-meta-title {
        color: ${props => props.theme.main.foreground};
    }
    .ant-card-meta-description {
        color: ${props => props.theme.main.foregroundMuted};
    }
`;
