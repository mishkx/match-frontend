import { UploadChangeParam, UploadFile } from 'antd/es/upload/interface';
import { HttpRequestHeader } from 'antd/lib/upload/interface';
import { Icon, Upload } from 'antd';
import React, { memo } from 'react';
import { UserItemPhoto } from 'src/api/user';

type UserPhotoUploadProps = {
    action?: string;
    headers?: HttpRequestHeader;
    fileList: UploadFile<UserItemPhoto>[];
    handleChange: (param: UploadChangeParam) => void;
    handleRemove?: (file: UploadFile<UserItemPhoto>) => void | boolean | Promise<void | boolean>;
    maxFiles: number;
};

export const UserPhotoUpload: React.FC<UserPhotoUploadProps> = (props) => {
    const showUploadButton = props.fileList.length < props.maxFiles;
    const uploadButtonHtml = (
        <div>
            <Icon type='plus' />
        </div>
    );

    return (
        <Upload
            headers={props.headers}
            action={props.action}
            type={'select'}
            listType={'picture-card'}
            fileList={props.fileList}
            onChange={props.handleChange}
            showUploadList={{
                showDownloadIcon: false,
                showPreviewIcon: false,
                showRemoveIcon: true,
            }}
            onRemove={props.handleRemove}
        >
            {showUploadButton && uploadButtonHtml}
        </Upload>
    );
};

export default memo(UserPhotoUpload);
