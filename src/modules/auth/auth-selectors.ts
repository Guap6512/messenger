import {createSelector} from 'reselect';
import {MODULE_NAMESPACE} from './auth-constants';

const rootSelector = state => state[MODULE_NAMESPACE];

export const getSocialMediaType = createSelector(
    rootSelector,
    ({socialMediaType}) => socialMediaType
);

export const getAuthStage = createSelector(rootSelector, ({authStage}) => authStage);

export const getResponseCodeType = createSelector(rootSelector, ({codeType}) => codeType);

export const getIsLoading = createSelector(rootSelector, ({isLoading}) => isLoading);
