import notification, { ArgsProps } from 'antd/lib/notification';
import { NOTIFICATION_DURATION } from '../../../constants/settings';

export default (props: ArgsProps) => {
    props.duration = props.duration || NOTIFICATION_DURATION;
    notification.open(props);
};

