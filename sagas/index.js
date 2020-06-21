import { all, fork } from 'redux-saga/effects';

// Imports: Redux Sagas
import { authSaga } from './authSaga';

// Redux Saga: Root Saga
export function* rootSaga () {
  yield all([
    fork(authSaga),
  ]);
};