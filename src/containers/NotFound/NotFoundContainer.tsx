import React from 'react';
import { useTranslation } from 'react-i18next';
import { NotFound } from '../../components/info';

const NotFoundContainer: React.FC = () => {
    const { t } = useTranslation();
    return <NotFound t={t} />
};

export default NotFoundContainer;
