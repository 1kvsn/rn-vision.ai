import { actionSpreader } from '../utils/commonHelpers';

//registration
export const registerUserAction = (data) => actionSpreader('REGISTER_USER', { data });
export const registerSuccessAction = () => actionSpreader('REGISTRATION_SUCCESS');

//auth login
export const loginUserAction = (data) => actionSpreader('LOGIN_USER', { data });
export const authInProgressAction = (isLoading) => actionSpreader('AUTH_IN_PROGRESS', { isLoading })
export const loginSuccessAction = (data) => actionSpreader('LOGIN_SUCCESS', { data });
