export interface UserAvatarProps {
    userId: number;
    userName: string;
    photoSrc?: string;
}

export interface UserChatAvatarProps extends UserAvatarProps {
    messagesCount: number;
}

export interface UserMatchedAvatarProps extends UserAvatarProps {
    isVisited: boolean;
}
