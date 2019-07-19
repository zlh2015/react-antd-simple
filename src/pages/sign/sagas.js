import { message } from 'antd';
import { call, put, delay, takeEvery } from 'redux-saga/effects';
import * as Actions from './actions';
import * as ActionTypes from './actionTypes';
import * as LocalStorage from '../../utils/localstorage';
import * as Api from '../../api/sign';

export function* handleSignIn(action){
    yield put(Actions.signInStart(null));
    const response = yield call(Api.signIn, action.payload);
    if(response && response.status === "success"){
        LocalStorage.put('RAS-username', action.payload.userName);
        LocalStorage.put('RAS-authority', response.currentAuthority);
        yield put(Actions.signInFinish(response));
        message.info(response.message);
        yield delay(1000); 
        if(response.redirect){
            window.location.href = response.redirect;
        }else{
            window.location.href = '/home';
        }
    }else{
        yield put(Actions.signInFinish(response));
    }
}

export function* handleSignUp(action){

}

export function* handleSignOut(action){
    yield put(Actions.signOutStart(null));
    const response = yield call(Api.signIn, action.payload);
    if(response && response.status === "success"){
        LocalStorage.put('RAS-username', '');
        LocalStorage.put('RAS-authority', '');
        yield put(Actions.signOutFinish(response));
        yield delay(1000); 
        window.location.href = '/';
    }else{
        yield put(Actions.signOutFinish(response));
    }
}

export default function* signSaga() {
    yield takeEvery(ActionTypes.SIGN_IN, handleSignIn)
    yield takeEvery(ActionTypes.SIGN_OUT, handleSignOut)
    yield takeEvery(ActionTypes.SIGN_UP, handleSignUp)
}