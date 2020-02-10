import styled from 'src/themes';
import BaseRadio from './Radio';
import BaseRadioButton from './RadioButton';
import BaseRadioGroup from './RadioGroup';

export const Radio = styled(BaseRadio)``;

export const RadioGroup = styled(BaseRadioGroup)`
    display: flex;
`;

export const RadioButton = styled(BaseRadioButton)`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    
    background-color: ${(props) => props.theme.main.background};
    color: ${(props) => props.theme.main.foreground};
    
    &:hover {
        background-color: ${(props) => props.theme.main.backgroundActive};
        color: ${(props) => props.theme.main.foreground};
    }

    ${RadioGroup} & {
        border: none;

        &.ant-radio-button-wrapper-checked,
        &.ant-radio-button-wrapper-checked:hover,
        &.ant-radio-button-wrapper-checked:active,
        &.ant-radio-button-wrapper-checked:focus {
          background-color: ${(props) => props.theme.primary.background};
          color: ${(props) => props.theme.primary.foreground};
          box-shadow: none;
        }
    }
`;
