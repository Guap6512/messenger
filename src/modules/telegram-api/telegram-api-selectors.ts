import {createSelector} from 'reselect';
import {MODULE_NAMESPACE} from './telegram-api-constants';

const rootSelector = state => state[MODULE_NAMESPACE];

export const getPhone = createSelector(rootSelector, ({phone}) => phone);

export const getPhoneCodeHash = createSelector(rootSelector, ({phoneCodeHash}) => phoneCodeHash);
