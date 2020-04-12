import {combineReducers} from 'redux';
import {authReducer, MODULE_NAMESPACE as AUTH_MODULE} from '../modules/auth';
import {telegramApiReducer, MODULE_NAMESPACE as TELEGRAM_API_MODULE} from '../modules/telegram-api';

export const rootReducer = combineReducers({
    [AUTH_MODULE]: authReducer,
    [TELEGRAM_API_MODULE]: telegramApiReducer,
});
