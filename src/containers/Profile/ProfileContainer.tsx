import React from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'src/components/common';
import { BigNavButton, ButtonWrapper, PageWrapper, UserCard } from 'src/components/kit';
import { PATH_PROFILE_EDIT, PATH_PROFILE_PHOTOS } from 'src/constants';
import { selectUserState } from 'src/selectors';
import { useTranslation } from 'react-i18next';

const ProfileContainer: React.FC = () => {
    const { data: user } = useSelector(selectUserState);
    const { t } = useTranslation();

    if (!user) {
        return <Spin/>;
    }

    return (
        <PageWrapper>
            <UserCard
                id={user.id}
                name={user.name}
                age={user.age}
                gender={user.gender}
                photos={user.photos}
            />
            <ButtonWrapper>
                <BigNavButton to={PATH_PROFILE_PHOTOS} title={t('Add photo')}/>
                <BigNavButton to={PATH_PROFILE_EDIT} title={t('Update profile')}/>
            </ButtonWrapper>
        </PageWrapper>
    );
};

export default ProfileContainer;
