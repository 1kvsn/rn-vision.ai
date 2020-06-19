import { all, fork } from 'redux-saga/effects';

// Imports: Redux Sagas
import { registerSaga } from './registerSaga';
import { loginSaga } from './loginSaga';

// Redux Saga: Root Saga
export function* rootSaga () {
  yield all([
    fork(registerSaga),
    fork(loginSaga),
  ]);
};