import {select, put, takeLatest, call} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import {AuthAction, MODULE_NAMESPACE, TELEGRAM_CODE_TYPE} from './auth-constants';
import {createActionTypeResolver} from '../../utils/createActionTypeResolver';
import {setAuthStage, setCodeType, setLoading} from './auth-actions';
import {AuthStage} from './auth-types';
import {getSocialMediaType} from './auth-selectors';
import {SocialMediaType} from '../project-constants';
import {setPhoneCodeHash, telegramSendCode} from '../telegram-api';

const ac = createActionTypeResolver(MODULE_NAMESPACE);

function* authWorker() {
    yield put(setAuthStage(AuthStage.SEND_CODE));
}

function* requestCodeWorker({payload: phone}) {
    const socialMediaType = yield select(getSocialMediaType);
    yield put(setLoading(true));
    if (socialMediaType === SocialMediaType.TELEGRAM) {
        const response = yield call(telegramSendCode, phone);
        yield put(setAuthStage(AuthStage.ENTER_CODE));
        const responseCodeType = response.type._;
        yield put(setPhoneCodeHash(response.phone_code_hash));
        yield put(setCodeType(TELEGRAM_CODE_TYPE[responseCodeType]));
        yield put(setLoading(false));
    }
}

export function* authSaga() {
    yield takeLatest(ac(AuthAction.REQUEST_CODE), requestCodeWorker);
    yield takeLatest(ac(AuthAction.SET_TYPE), authWorker);
}
