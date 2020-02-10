import { RouteComponentProps } from 'react-router';

export type ChatItemContainerRouteParams = {
    id: string;
}

export type SingleChatContainerProps = RouteComponentProps<ChatItemContainerRouteParams> & {};
