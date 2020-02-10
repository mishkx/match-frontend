import { TFunction } from 'i18next';
import React, { memo } from 'react';
import { UserItemPhoto } from 'src/api/user';
import { UserPhotos } from '../index';
import UserPhotosEmpty from '../UserPhotos/UserPhotosEmpty';
import { Card, CardMeta, CardMetaUserAge, CardMetaUserName } from './styles';

type UserCardProps = {
    id: number;
    name: string;
    gender?: string | null;
    age?: number | null;
    distance?: number | null;
    description?: string | null;
    photos?: UserItemPhoto[];
    t?: TFunction;
}

export const UserCard: React.FC<UserCardProps> = ({ t, ...props }) => {
    const photosHtml = props.photos?.length
        ? <UserPhotos photos={props.photos}/>
        : <UserPhotosEmpty/>;

    const titleHtml = (
        <>
            <div>
                <CardMetaUserName>{props.name}</CardMetaUserName>
                <CardMetaUserAge>{props.age}</CardMetaUserAge>
            </div>
            <div>
                {props.distance && t && t('{{distance}} km from you', {
                    distance: props.distance,
                })}
            </div>
        </>
    );
    return (
        <Card bordered={false}>
            {photosHtml}
            <CardMeta
                title={titleHtml}
                description={props.description}
            />
        </Card>
    );
};

export default memo(UserCard);
