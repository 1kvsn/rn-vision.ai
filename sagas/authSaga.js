import { takeLatest, put } from 'redux-saga/effects';
import Firebase from '../config/firebase';
import { loginSuccessAction, registerSuccessAction, authInProgressAction } from '../actions';


function* userLogin({ payload }) {
	const { email, password } = payload.data;
	try {
		yield put(authInProgressAction(true));
		const login = Firebase.auth().signInWithEmailAndPassword(email, password); // doesn't return useful data
		const user = Firebase.auth().currentUser; // check if the user is logged in
		if (user) {
			const data = {
				name: user.displayName,
				email: user.email,
				lastLoginAt: user.lastLoginAt,
				uid: user.uid, // The user's ID, unique to the Firebase project.
			}
			yield put(loginSuccessAction(data));
			yield put(authInProgressAction(false));
		} else {
			// show toast indicating trying login again
			yield put(authInProgressAction(false));
		}
	} catch (error) {
			yield put(authInProgressAction(false));
		// make showToast like action to handleErrors and show in UI
			console.log(error.toString(error));
		}
}

function* userRegister({ payload }) {
	const { email, password } = payload.data;
	try {
		yield put(authInProgressAction(true));
		const response = Firebase.auth().createUserWithEmailAndPassword(email, password); // doesn't respond with useful data
		yield put(authInProgressAction(false));
		yield put(registerSuccessAction(true));
	} catch (error) {
			yield put(authInProgressAction(false));
			// make showToast like action to handleErrors and show in UI
			console.log(error.toString(error));
		}
}


export function* authSaga() {
	yield takeLatest('LOGIN_USER', userLogin);
	yield takeLatest('REGISTER_USER', userRegister);
}