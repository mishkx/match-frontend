import { Modal } from 'antd';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSingleMatch, getMatchSingleItem } from 'src/actions';
import { Alert, Button,  Spin } from 'src/components/common';
import { BigNavButton, ButtonWrapper, PageWrapper, UserCard } from 'src/components/kit';
import { PATH_MATCHES, PATH_MATCHES_CHAT } from 'src/constants';
import { selectMatchInfoState } from 'src/selectors';
import { history } from 'src/utils';
import { MatchSingleContainerProps } from './types';

const MatchSingleContainer: React.FC<MatchSingleContainerProps> = (props) => {
    const dispatch = useDispatch();
    const infoState = useSelector(selectMatchInfoState);
    const { t } = useTranslation();
    const { data: user } = infoState;
    const id = Number(props.match.params.id);

    useEffect(() => {
        dispatch(getMatchSingleItem.request({ id }))
    }, [dispatch, id]);

    if (!infoState.isFetching && infoState.error) {
        return (
            <Alert
                type={'error'}
                message={infoState.error.message}
                description={infoState.error.description}
            />
        )
    }

    if (infoState.isFetching || !user) {
        return <Spin/>;
    }

    const handleDelete = () => (
        new Promise<boolean>((resolve, reject) => (
            Modal.confirm({
                onOk: () => {
                    dispatch(deleteSingleMatch.request({ id: user.id }));
                    history.push(PATH_MATCHES);
                    resolve(true);
                },
                title: t('Are you sure?'),
            })
        ))
    );

    return (
        <PageWrapper>
            <UserCard
                id={user.id}
                name={user.name}
                gender={user.gender}
                distance={user.distance}
                description={user.description}
                age={user.age}
                photos={user.photos}
                t={t}
            />
            <ButtonWrapper>
                <BigNavButton to={PATH_MATCHES_CHAT(user.id)} title={t('Contact')} />
                <Button onClick={handleDelete}>{t('Delete match')}</Button>
            </ButtonWrapper>
        </PageWrapper>
    );
};

export default MatchSingleContainer;
