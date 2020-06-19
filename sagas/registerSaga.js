import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import Firebase from '../config/firebase';
import { registerSuccessAction, authInProgressAction } from '../actions';

function* userRegister({ payload }) {
	const { email, password } = payload.data;
	try {
		yield put(authInProgressAction(true));
		const response = Firebase.auth().createUserWithEmailAndPassword(email, password);
		yield put(authInProgressAction(false));
		yield put(registerSuccessAction(true));
	} catch (error) {
		yield put(authInProgressAction(false));
		// make showToast like action to handleErrors and show in UI
			console.log(error.toString(error));
		}
}

export function* registerSaga() {
  yield takeLatest('REGISTER_USER', userRegister);
}