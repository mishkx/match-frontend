import { message } from 'antd';
import React, { memo } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import moment, { Moment } from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from 'src/actions';
import { UserUpdateRequest } from 'src/api';
import {
    Alert,
    Button,
    DatePickerField,
    FieldWrapper,
    InputField,
    RadioButtonField,
    RadioGroup,
    SliderField,
    Spin,
    Title,
} from 'src/components/common';
import { ButtonWrapper } from 'src/components/kit';
import {
    DATE_FORMAT,
    USER_PREFERENCE_DEFAULT_AGE_ADDING,
    USER_PREFERENCE_DEFAULT_DISTANCE,
 } from 'src/constants';
import { selectAppConfig } from 'src/selectors';
import { SettingsFormProps, SettingsFormValues } from './types';

Yup.addMethod<Yup.DateSchema>(Yup.date, 'format', (format: string) => {
    return Yup.date().transform((value: Yup.DateSchema, input: string) => {
        const parsed = moment(input, format, true);
        return parsed.isValid() ? parsed.toDate() : new Date('');
    });
});

// todo: разбить на компоненты
const SettingsForm: React.FC<SettingsFormProps> = (props) => {
    const { user, t } = props;
    const dispatch = useDispatch();
    const config = useSelector(selectAppConfig);

    if (!config) {
        return <Spin/>;
    }

    const initialValues: SettingsFormValues = {
        bornOn: user.bornOn ? moment(user.bornOn, DATE_FORMAT) : null,
        description: user.description,
        gender: user.gender,
        name: user.name,
        preferredAge: [
            user.preferences.ageFrom || config.userMinAge,
            user.preferences.ageTo || config.userMinAge + USER_PREFERENCE_DEFAULT_AGE_ADDING,
        ],
        preferredGender: user.preferences.gender,
        preferredMaxDistance: user.preferences.maxDistance
            || USER_PREFERENCE_DEFAULT_DISTANCE,
    };

    const validationSchema = Yup.object<SettingsFormValues>({
        bornOn: Yup.date()
            .format('L')
            .max(moment().subtract(config.userMinAge, 'years').toDate())
            .min(moment().subtract(config.userMaxAge, 'years').toDate())
            .nullable(true)
            .required(t('Required')),
        description: Yup.string()
            .max(config.userMaxDescriptionLength),
        gender: Yup.mixed()
            .oneOf([
                config.userGenderFemale,
                config.userGenderMale,
            ])
            .required(t('Required')),
        name: Yup.string()
            .max(config.userMaxNameLength)
            .required(t('Required')),
        preferredAge: Yup.mixed()
            .required(t('Required')),
        preferredGender: Yup.mixed()
            .oneOf([
                config.userGenderFemale,
                config.userGenderMale,
            ])
            .required(t('Required')),
        preferredMaxDistance: Yup.number()
            .required(t('Required')),
    });

    const disabledDate = (current: Moment | null) => {
        return (current && (current > moment().subtract(config.userMinAge, 'years')
            || current < moment().subtract(config.userMaxAge, 'years')
        )) as boolean;
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values: SettingsFormValues, actions) => {
                const data: UserUpdateRequest = {
                    bornOn: (values.bornOn as Moment).format(DATE_FORMAT),
                    description: values.description as string,
                    gender: values.gender as string,
                    name: values.name,
                    preferences: {
                        ageFrom: values.preferredAge[0],
                        ageTo: values.preferredAge[1],
                        gender: values.preferredGender as string,
                        maxDistance: values.preferredMaxDistance as number,
                    },
                };
                message.success(t('Successfully updated'));
                dispatch(updateUser.request(data));
            }}
        >
            {(formProps) => {
                const isSubmitted = formProps.submitCount > 0;
                return (
                <Form>
                    <Title level={4}>{t('Account')}</Title>
                    <InputField
                        allowClear={true}
                        name={'name'}
                        type={'text'}
                        label={t('Name')}
                    />
                    <FieldWrapper
                        error={formProps.errors.gender}
                        hasFeedback={false}
                        isSubmitted={isSubmitted}
                        isTouched={formProps.touched.gender}
                    >
                        <RadioGroup
                            defaultValue={user.gender}
                            buttonStyle={'solid'}
                            name={'gender'}
                        >
                            <RadioButtonField
                                children={t('Male')}
                                key={config.userGenderMale}
                                name={'gender'}
                                type={'radio'}
                                value={config.userGenderMale}
                            />
                            <RadioButtonField
                                children={t('Female')}
                                key={config.userGenderFemale}
                                name={'gender'}
                                type={'radio'}
                                value={config.userGenderFemale}
                            />
                        </RadioGroup>
                    </FieldWrapper>
                    <DatePickerField
                        allowClear={false}
                        disabledDate={disabledDate}
                        format={'L'}
                        name={'bornOn'}
                        showTime={false}
                        type={'text'}
                        label={t('Birth date')}
                    />
                    <InputField
                        allowClear={true}
                        name={'description'}
                        type={'text'}
                        label={t('About')}
                    />

                    <Title level={4}>{t('Discovery')}</Title>
                    <FieldWrapper
                        error={formProps.errors.preferredGender}
                        hasFeedback={false}
                        isSubmitted={isSubmitted}
                        isTouched={formProps.touched.preferredGender}
                    >
                        <RadioGroup
                            defaultValue={user.preferences.gender}
                            buttonStyle={'solid'}
                            name={'preferredGender'}
                        >
                            <RadioButtonField
                                children={t('Male')}
                                key={config.userGenderMale}
                                name={'preferredGender'}
                                type={'radio'}
                                value={config.userGenderMale}
                            />
                            <RadioButtonField
                                children={t('Female')}
                                key={config.userGenderFemale}
                                name={'preferredGender'}
                                type={'radio'}
                                value={config.userGenderFemale}
                            />
                        </RadioGroup>
                    </FieldWrapper>
                    <SliderField
                        hasFeedback={false}
                        label={t('Age')}
                        max={config.userMaxAge}
                        min={config.userMinAge}
                        name={'preferredAge'}
                        range={true}
                        type={'number'}
                    />
                    <SliderField
                        hasFeedback={false}
                        label={t('Distance')}
                        max={config.userMaxDistance}
                        min={config.userMinDistance}
                        name={'preferredMaxDistance'}
                        type={'number'}
                    />

                    <ButtonWrapper>

                        <Button
                            type={'primary'}
                            children={t('Save')}
                            htmlType={'submit'}
                            disabled={props.isSaving}
                            loading={props.isSaving}
                        />
                    </ButtonWrapper>

                    {props.error && <Alert
                        message={props.error.message}
                        description={props.error.description}
                        type={'error'}
                    />}
                </Form>
                )
            }}
        </Formik>
    );
};

export default memo(SettingsForm);
