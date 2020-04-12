import {CodeType} from './auth-types';

export const MODULE_NAMESPACE = 'AUTH';

export const AuthAction = {
    SET_TYPE: 'SET_TYPE',
    SET_STAGE: 'SET_STAGE',
    REQUEST_CODE: 'REQUEST_CODE',
    SET_LOADING: 'SET_LOADING',
    SET_CODE_TYPE: 'SET_CODE_TYPE',
};

export const TELEGRAM_CODE_TYPE = {
    'auth.sentCodeTypeApp': CodeType.APP,
    'auth.sentCodeTypeSms': CodeType.SMS,
    'auth.sentCodeTypeCall': CodeType.CALL,
    'auth.sentCodeTypeFlashCall': CodeType.PHONE_NUMBER,
};
