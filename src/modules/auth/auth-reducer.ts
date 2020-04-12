import {AuthStage, AuthState} from './auth-types';
import {AuthAction, MODULE_NAMESPACE} from './auth-constants';
import {createActionTypeResolver} from '../../utils/createActionTypeResolver';

const initialState: AuthState = {
    authStage: AuthStage.SELECT_TYPE,
    isLoading: false,
};

const ac = createActionTypeResolver(MODULE_NAMESPACE);

export const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ac(AuthAction.SET_TYPE):
            return {...state, socialMediaType: payload};

        case ac(AuthAction.SET_STAGE):
            return {...state, authStage: payload};

        case ac(AuthAction.SET_LOADING):
            return {...state, isLoading: payload};

        case ac(AuthAction.SET_CODE_TYPE):
            return {...state, codeType: payload};

        default:
            return state;
    }
};
