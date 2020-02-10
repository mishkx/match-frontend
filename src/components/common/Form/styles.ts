import styled from 'src/themes';
import BaseForm from './Form';
import BaseFormItem from './FormItem';

export const Form = styled(BaseForm)``;

export const FormItem = styled(BaseFormItem)`
    font-size: ${props => props.theme.all.controlFontSize};
    &:last-child {
        margin-right: 0;
    }
`;
