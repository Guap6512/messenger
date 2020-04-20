import {TelegramAction, MODULE_NAMESPACE} from './telegram-api-constants';
import {createActionFactory} from '../../store/action-factory';

const actionFactory = createActionFactory(MODULE_NAMESPACE);

export const setPhoneCodeHash = actionFactory<string>(TelegramAction.SET_PHONE_CODE_HASH);
export const setPhone = actionFactory<string>(TelegramAction.SET_PHONE);
