import {MTProto} from '@mtproto/core';

const API_ID = process.env.REACT_APP_TELEGRAM_API_ID;
const API_HASH = process.env.REACT_APP_TELEGRAM_API_HASH;

export const telegramApi = new MTProto({
    api_id: API_ID,
    api_hash: API_HASH,
    test: true,
});
