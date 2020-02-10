import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppLoading } from 'src/components/info';
import { PageWrapper } from 'src/components/kit';
import { getAppConfig, getUser } from 'src/actions';
import { selectAppConfigState, selectUserState } from 'src/selectors';
import { SettingsForm } from '../Settings';
import { SocketContainer } from '../index';

type InitialContainerProps = {
    children?: React.ReactNode;
};

const InitialContainer: React.FC<InitialContainerProps> = ({ children }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const configState = useSelector(selectAppConfigState);
    const userState = useSelector(selectUserState);
    const user = userState.data;

    const configIsNotLoaded = !configState.isLoaded || configState.isFetching;
    const userIsNotLoaded = !userState.isLoaded || userState.isFetching;

    useEffect(() => {
        if (configIsNotLoaded) {
            dispatch(getAppConfig.request());
        }
    }, [dispatch, configIsNotLoaded]);

    useEffect(() => {
        if (userIsNotLoaded) {
            dispatch(getUser.request());
        }
    }, [dispatch, userIsNotLoaded]);

    if (configIsNotLoaded || userIsNotLoaded || !user) {
        return <AppLoading/>;
    }

    if (user && user.dataIsFilled) {
        return (
            <>
                {children}
                <SocketContainer
                    userId={user.id}
                    broadcaster={configState.data.socket.broadcaster}
                    options={configState.data.socket.options}
                />
            </>
        );
    }

    return (
        <PageWrapper>
            <SettingsForm
                t={t}
                isSaving={userState.isUpdating}
                error={userState.updateError}
                user={user}
            />
        </PageWrapper>
    );
};

export default memo(InitialContainer);
