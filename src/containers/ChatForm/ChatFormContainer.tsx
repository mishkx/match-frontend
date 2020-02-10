import { Formik, FormikHelpers, FormikProps } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'uuid/v4';
import * as Yup from 'yup';
import { sendMessage } from 'src/actions';
import { ChatSendMessageRequest } from 'src/api';
import { Spin } from 'src/components/common';
import { ChatMessageInputForm, MessageInputFormWrapper } from 'src/components/kit';
import { DATETIME_FORMAT } from 'src/constants';
import { selectAppConfig } from 'src/selectors';
import { moment } from 'src/utils';

type ChatFormContainerProps = {
    userId: number;
}

type ChatFormValues = {
    message: string;
}

const ChatFormContainer: React.FC<ChatFormContainerProps> = (props) => {
    const dispatch = useDispatch();
    const config = useSelector(selectAppConfig);
    const { userId } = props;

    if (!config) {
        return <Spin/>;
    }

    const initialValues: ChatFormValues = {
        message: '',
    };

    const validationSchema = Yup.object<ChatFormValues>({
        message: Yup.string()
            .max(config.chatMaxMessageContentLength)
            .required('required'),
    });

    const handleSubmit = (values: ChatFormValues, helpers: FormikHelpers<ChatFormValues>) => {
        const payload: ChatSendMessageRequest = {
            data: {
                content: values.message.trim(),
                sentAt: moment().format(DATETIME_FORMAT).toString(),
                token: uuid(),
            },
            id: userId,
        };
        dispatch(sendMessage.request(payload));
        helpers.resetForm();
    };

    const handleRender = (formProps: FormikProps<ChatFormValues>) => {
        const handlePressEnter: React.KeyboardEventHandler<HTMLTextAreaElement> = async (event) => {
            if (!event.shiftKey && !event.altKey && !event.ctrlKey) {
                event.preventDefault();
                await formProps.submitForm();
            }
        };
        const hasError = !!formProps.errors.message;
        return (
            <ChatMessageInputForm
                handlePressEnter={handlePressEnter}
                handleSubmit={formProps.handleSubmit}
                hasError={hasError}
            />
        );
    };

    return (
        <MessageInputFormWrapper>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                validateOnMount={true}
            >
                {handleRender}
            </Formik>
        </MessageInputFormWrapper>
    );
};

export default ChatFormContainer;
