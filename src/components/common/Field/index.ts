import {
    withFormField,
    withFormFieldWrapper,
} from 'src/hocs';
import { DatePickerProps } from '../DatePicker/DatePicker';
import { InputProps } from '../Input/Input';
import { RadioProps } from '../Radio/Radio';
import { RadioButtonProps } from '../Radio/RadioButton';
import { SliderProps } from '../Slider/Slider';
import { TextAreaProps } from '../TextArea/TextArea';
import {
    DatePicker,
    Input,
    Radio,
    RadioButton,
    Slider,
    TextArea,
} from '../index';
import FieldWrapper from './FieldWrapper';

const DatePickerField = withFormFieldWrapper<DatePickerProps>(DatePicker);
const InputField = withFormFieldWrapper<InputProps>(Input);
const RadioField = withFormField<RadioProps>(Radio);
const RadioButtonField = withFormField<RadioButtonProps>(RadioButton);
const SliderField = withFormFieldWrapper<SliderProps>(Slider);
const TextAreaField = withFormField<TextAreaProps>(TextArea);

export {
    DatePickerField,
    InputField,
    RadioField,
    RadioButtonField,
    SliderField,
    TextAreaField,
    FieldWrapper,
};
