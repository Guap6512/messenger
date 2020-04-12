import {SocialMediaType} from '../project-constants';

export enum AuthStage {
    SELECT_TYPE,
    SEND_CODE,
    ENTER_CODE,
}

export enum CodeType {
    SMS,
    APP,
    CALL,
    PHONE_NUMBER,
}

export interface AuthState {
    socialMediaType?: SocialMediaType;
    isLoading: boolean;
    authStage: AuthStage;
    codeType?: CodeType;
}
