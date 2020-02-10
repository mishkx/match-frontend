import { TFunction } from 'i18next';
import React, { memo } from 'react';
import { Button, Result } from '../../common';
import UserAvatar from '../UserAvatar';
import * as Styled from './styles';

type MatchCardProps = {
    currentUserId: number;
    currentUserName: string;
    currentUserPhotoSrc?: string;
    matchedUserId: number;
    matchedUserName: string;
    matchedUserPhotoSrc?: string;
    handleSkipMatch: () => void;
    t: TFunction;
}

export const MatchCard: React.FC<MatchCardProps> = ({ t, ...props }) => {
    const avatarsHtml = (
        <Styled.AvatarsWrapper>
            <UserAvatar
                userId={props.currentUserId}
                userName={props.currentUserName}
                photoSrc={props.currentUserPhotoSrc}
            />
            <UserAvatar
                userId={props.matchedUserId}
                userName={props.matchedUserName}
                photoSrc={props.matchedUserPhotoSrc}
            />
        </Styled.AvatarsWrapper>
    );
    return (
        <Styled.Wrapper>
            <Result
                title={t('It\'s a match!')}
                subTitle={avatarsHtml}
                extra={<Button onClick={props.handleSkipMatch} icon={'user'} children={t('Keep searching')}/>}
            />
        </Styled.Wrapper>
    );
};

export default memo(MatchCard);
