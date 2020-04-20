import * as React from 'react';
import {Button, FormControl, Input, InputLabel, Typography} from '@material-ui/core';
import './auth-form.scss';
import {PhoneMaskedInput} from './masked-input/phone-input';
import {CodeType} from '../../../modules/auth/auth-types';

interface AuthFormProps {
    requestCode: (phone: string) => void;
    responseCodeType?: CodeType;
    signIn: (code: string) => void;
    isLoading: boolean;
}

const TEST_PHONE_LENGTH = 11;

const CODE_HINT = {
    [CodeType.APP]: 'You will receive the code in app',
    [CodeType.SMS]: 'You will receive the code via sms',
    [CodeType.CALL]: 'You will receive the code via the call',
    [CodeType.PHONE_NUMBER]: 'You need to enter the phone number that will ring you up soon',
};

export const AuthForm = ({requestCode, responseCodeType, isLoading, signIn}: AuthFormProps) => {
    const [phoneNumber, setPhoneNumber] = React.useState('7');
    const [code, setCode] = React.useState('');
    const [isPhoneValid, setPhoneValid] = React.useState(false);
    const [isCodeInputVisible, setCodeInputVisible] = React.useState(false);

    React.useEffect(() => {
        setPhoneValid(phoneNumber.length === TEST_PHONE_LENGTH);
    }, [phoneNumber]);

    React.useEffect(() => {
        setCodeInputVisible(responseCodeType !== undefined);
    }, [responseCodeType]);

    const onPhoneChange = ({target: {value}}) => setPhoneNumber(value.replace(/\D/g, ''));
    const onCodeChange = ({target: {value}}) => setCode(value);

    const onSubmit = () => {
        if (isCodeInputVisible) signIn(code);
        else requestCode(phoneNumber);
    };

    const isButtonDisabled = isLoading || !isPhoneValid;

    return (
        <form className="auth-form">
            <Typography variant="h6">Authorization</Typography>
            <FormControl className="auth-form__element">
                <InputLabel htmlFor="phone-input">Phone number</InputLabel>
                <Input
                    value={phoneNumber}
                    disabled={isCodeInputVisible}
                    onChange={onPhoneChange}
                    name="phone-input"
                    id="phone-input"
                    inputComponent={PhoneMaskedInput as any}
                />
            </FormControl>
            {isCodeInputVisible && (
                <>
                    <FormControl className="auth-form__element">
                        <InputLabel htmlFor="code-input">Code</InputLabel>
                        <Input
                            value={code}
                            onChange={onCodeChange}
                            name="phone-input"
                            id="code-input"
                        />
                    </FormControl>
                    <Typography variant="caption" display="block" gutterBottom>
                        {responseCodeType !== undefined && CODE_HINT[responseCodeType]}
                    </Typography>
                </>
            )}
            <Button
                disabled={isButtonDisabled}
                onClick={onSubmit}
                color="primary"
                variant="contained"
            >
                {isCodeInputVisible ? 'Check Code' : 'Send Code'}
            </Button>
        </form>
    );
};
