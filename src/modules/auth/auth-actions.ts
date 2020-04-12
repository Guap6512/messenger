import {AuthAction, MODULE_NAMESPACE} from './auth-constants';
import {createActionFactory} from '../../store/action-factory';
import {SocialMediaType} from '../project-constants';
import {AuthStage, CodeType} from './auth-types';

const actionFactory = createActionFactory(MODULE_NAMESPACE);

export const setSocialMediaType = actionFactory<SocialMediaType>(AuthAction.SET_TYPE);
export const setAuthStage = actionFactory<AuthStage>(AuthAction.SET_STAGE);
export const requestCode = actionFactory<string>(AuthAction.REQUEST_CODE);
export const setLoading = actionFactory<boolean>(AuthAction.SET_LOADING);
export const setCodeType = actionFactory<CodeType>(AuthAction.SET_CODE_TYPE);
