import { ArgsProps } from 'antd/lib/notification';
import NotificationInfo from './NotificationInfo';

export default (props: ArgsProps) => {
    NotificationInfo({
        ...props,
        type: 'error',
    });
};

