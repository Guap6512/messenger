import {telegramApi} from './mtproto';

export const telegramSendCode = phone => {
    return telegramApi.call('auth.sendCode', {
        phone_number: phone,
        settings: {
            _: 'codeSettings',
        },
    });
};

export const telegramSignIn = (phone, code, phoneHash) =>
    telegramApi.call('auth.signIn', {
        phone,
        code,
        phone_hash: phoneHash,
    });
