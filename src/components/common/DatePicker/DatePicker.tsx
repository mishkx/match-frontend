import BaseDatePicker from 'antd/lib/date-picker'
import { DatePickerProps as BaseDatePickerProps } from 'antd/lib/date-picker/interface'
import React, { memo } from 'react';

export interface DatePickerProps extends BaseDatePickerProps {
}

export const DatePicker: React.FC<DatePickerProps> = (props) => (
    <BaseDatePicker {...props} />
);

export default memo(DatePicker);
