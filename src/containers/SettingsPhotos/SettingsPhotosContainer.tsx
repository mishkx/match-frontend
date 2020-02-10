import { Modal } from 'antd';
import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { UploadChangeParam } from 'antd/es/upload/interface';
import { PageWrapper, UserPhotoUpload } from 'src/components/kit';
import { URL_USER_PHOTO } from 'src/constants';
import { deleteUserPhoto, userPhotoUploaded } from 'src/actions';
import { xsrfTokenHeader } from 'src/utils';
import { selectAppConfig, selectUser } from 'src/selectors';
import { NavBar } from 'src/components/layout';
import { convertPhotosToUploadedFile } from './helpers';
import { FileListItem } from './types';

const SettingsPhotosContainer: React.FC = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const config = useSelector(selectAppConfig);
    const { t } = useTranslation();
    const userPhotos = user?.photos || [];

    const files: FileListItem[] = userPhotos.map((photo) => convertPhotosToUploadedFile(photo));

    const [fileList, setFileList] = useState(files);

    const handleChange = (param: UploadChangeParam) => {
        let fileListData = param.fileList;
        if (param.file.status === 'done') {
            dispatch(userPhotoUploaded(param.file.response));
            fileListData = param.fileList.map((file) => convertPhotosToUploadedFile(file.response));
        }
        setFileList(fileListData);
    };

    const handleRemove = (file: FileListItem) => (
        new Promise<boolean>((resolve, reject) => (
            Modal.confirm({
                onOk: () => {
                    dispatch(deleteUserPhoto.request({ id: Number(file.uid) }));
                    resolve(true);
                },
                title: t('Are you sure?'),
            })
        ))
    );

    return (
        <PageWrapper>
            <NavBar>{t('Photos')}</NavBar>
            <UserPhotoUpload
                action={URL_USER_PHOTO}
                headers={xsrfTokenHeader()}
                fileList={fileList}
                handleChange={handleChange}
                handleRemove={handleRemove}
                maxFiles={config.userMaxPhotos}
            />
        </PageWrapper>
    );
};

export default memo(SettingsPhotosContainer);
