import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Spin } from 'src/components/common';
import { PageWrapper } from 'src/components/kit';
import { NavBar } from 'src/components/layout';
import { selectUserState } from 'src/selectors';
import SettingsForm from './SettingsForm';

const SettingsContainer: React.FC = () => {
    const state = useSelector(selectUserState);
    const { t } = useTranslation();

    if (!state.data) {
        return <Spin/>;
    }

    return (
        <PageWrapper>
            <NavBar>{t('Settings')}</NavBar>
            <SettingsForm t={t} user={state.data} isSaving={state.isUpdating}/>
        </PageWrapper>
    );
};

export default SettingsContainer;
