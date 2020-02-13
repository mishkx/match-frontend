import { TFunction } from 'i18next';
import React, { memo } from 'react';
import { PATH_MATCHES_CHAT } from 'src/constants';
import { Button, Result } from '../../common';
import { BigNavButton } from '../index';
import UserAvatar from '../UserAvatar';
import { ButtonWrapper } from '../UserCard';
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
    const buttonsHtml = (
        <ButtonWrapper>
            <Button onClick={props.handleSkipMatch} children={t('Keep searching')}/>
            <BigNavButton
                handleClick={props.handleSkipMatch}
                to={PATH_MATCHES_CHAT(props.matchedUserId)}
                title={t('Contact')}
            />
        </ButtonWrapper>
    );
    return (
        <Styled.Wrapper>
            <Result
                title={t('It\'s a match!')}
                subTitle={avatarsHtml}
                extra={buttonsHtml}
            />
        </Styled.Wrapper>
    );
};

export default memo(MatchCard);
