import { List } from 'antd';
import styled from 'src/themes';
import { Form, FormItem, TextArea } from '../../common';
import { PageWrapper } from '../Blocks';

export const ChatWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: hidden;
`;

export const ChatMessagesWrapper = styled(PageWrapper)`
    display: flex;
    flex-direction: column-reverse;
    margin-top: auto;
    padding: 0 ${props => props.theme.all.blockPadding};
`;

export const ChatReversedList = styled.div`
    ul {
        display: flex;
        flex-direction: column-reverse;
    }
`;

const MessageListItem = styled(List.Item)`
    padding: 5px 8px 3px !important; // todo: remove important
    border-radius: ${props => props.theme.all.borderRadius};
    margin-bottom: ${props => props.theme.all.elementPadding};
    max-width: 80%;
    .ant-list-item-meta-content {
        display: flex;
        .ant-list-item-meta-description {
            display: flex;
            align-items: center;
            flex-shrink: 0;
            align-self: flex-end;
            font-size: 11px;
            margin-left: 4px;
            .anticon {
                margin-left: 4px;
            }
        }
    }
`;

export const MessageListItemFrom = styled(MessageListItem)`
    align-self: flex-end;
    background-color: ${props => props.theme.primary.background};
    .ant-list-item-meta-title {
        color: ${props => props.theme.primary.foreground};
    }
`;

export const MessageListItemTo = styled(MessageListItem)`
    align-self: flex-start;
    background-color: ${props => props.theme.main.background};
    .ant-list-item-meta-title {
        color: ${props => props.theme.main.foreground};
    }
`;

export const MessageInputFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    padding: ${props => props.theme.all.elementPadding};
`;

export const MessageInputForm = styled(Form)`
    display: flex;
    align-items: center;
    .ant-form-item:not(:last-child) {
        margin-right: ${props => props.theme.all.elementPadding};
    }
    .ant-form-item-control {
        line-height: initial;
    }
`;

export const MessageInputWrapper = styled(FormItem)`
    flex-grow: 1;
    .ant-form-item-control-wrapper {
        width: 100%;
    }
    .ant-form-item-control {
        line-height: inherit;
    }
    ${TextArea} {
        resize: none;
        margin-bottom: 0;
    }
`;
