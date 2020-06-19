import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import Firebase from '../config/firebase';
import { loginSuccessAction, authInProgressAction } from '../actions';

function* userLogin({ payload }) {
	const { email, password } = payload.data;
	try {
		yield put(authInProgressAction(true));
		const response = Firebase.auth().signInWithEmailAndPassword(email, password);
		console.log(response, 'login response')
		console.log(Firebase.currentUser, 'this is current User')
		// yield put(loginSuccessAction(response.user));
		yield put(authInProgressAction(false));
	} catch (error) {
		yield put(authInProgressAction(false));
		// make showToast like action to handleErrors and show in UI
			console.log(error.toString(error));
		}
}

export function* loginSaga() {
  yield takeLatest('LOGIN_USER', userLogin);
}