import React, { memo } from 'react';
import { FormLayout } from 'antd/lib/form/Form';
import { AutoSizeType } from 'antd/lib/input/ResizableTextArea';
import { Button, FormItem, TextAreaField } from 'src/components/common';
import * as Styled from './styles';

type ChatMessageInputFormProps = {
    handlePressEnter: React.KeyboardEventHandler<HTMLTextAreaElement>;
    handleSubmit: () => void;
    hasError: boolean;
    fieldAllowClear?: boolean;
    fieldAutoSize?: boolean | AutoSizeType;
    formLayout?: FormLayout;
};

const ChatMessageInputForm: React.FC<ChatMessageInputFormProps> = (props) => (
    <Styled.MessageInputForm onSubmit={props.handleSubmit} layout={props.formLayout}>
        <Styled.MessageInputWrapper>
            <TextAreaField
                autoSize={props.fieldAutoSize}
                allowClear={props.fieldAllowClear}
                name={'message'}
                type={'text'}
                onPressEnter={props.handlePressEnter}
            />
        </Styled.MessageInputWrapper>
        <FormItem>
            <Button
                type={'primary'}
                htmlType={'submit'}
                disabled={props.hasError}
                shape={'circle'}
                icon={'arrow-up'}
            />
        </FormItem>
    </Styled.MessageInputForm>
);

ChatMessageInputForm.defaultProps = {
    fieldAllowClear: false,
    fieldAutoSize: {
        maxRows: 6,
        minRows: 1,
    },
    formLayout: 'inline',
};

export default memo(ChatMessageInputForm);
