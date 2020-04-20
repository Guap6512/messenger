import {telegramApi} from './mtproto';

export const telegramSendCode = (phone: string) =>
    telegramApi.call('auth.sendCode', {
        phone_number: phone,
        settings: {
            _: 'codeSettings',
        },
    });

export const telegramSignIn = (phone, code, phoneHash) =>
    telegramApi.call('auth.signIn', {
        phone_number: phone,
        phone_code: code,
        phone_code_hash: phoneHash,
    });

export const telegramLogOut = () => telegramApi.call('auth.logOut');

export const telegramGetAllChats = () => {
    return telegramApi.call('messages.getAllChats');
};
