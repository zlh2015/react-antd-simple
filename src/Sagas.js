import { fork } from 'redux-saga/effects';
import signSaga from "./pages/sign/sagas";

export default function* rootSagas() {
    yield fork(signSaga);
}


