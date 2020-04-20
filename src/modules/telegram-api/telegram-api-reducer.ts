import {createActionTypeResolver} from '../../utils/createActionTypeResolver';
import {MODULE_NAMESPACE, TelegramAction} from './telegram-api-constants';
import {TelegramApiState} from './telegram-api-types';

const initialState: TelegramApiState = {};

const ac = createActionTypeResolver(MODULE_NAMESPACE);

export const telegramApiReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ac(TelegramAction.SET_PHONE_CODE_HASH):
            return {...state, phoneCodeHash: payload};

        case ac(TelegramAction.SET_PHONE):
            return {...state, phone: payload};

        default:
            return state;
    }
};
