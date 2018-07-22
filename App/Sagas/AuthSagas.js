import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import AuthActions from '../Redux/AuthRedux'

export function * login (api, action) {
  const { email, password } = action
  // make the call to the api
  const response = yield call(api.login, email, password);
  
  if (response.ok && response.data.success) {
    const user = response.data.user;
    // do data conversion here if needed
    yield put(AuthActions.loginSuccess(user));
  } else {
    const message = response.data.message;
    yield put(AuthActions.loginFailure(message));
  }
}

export function * signup (api, action) {
  const { email, password1, password2, signupCode } = action
  // make the call to the api
  const response = yield call(api.signup, email, password1, password2, signupCode);

  if (response.ok && response.data.success) {
    const user = response.data.user;
    // do data conversion here if needed
    yield put(AuthActions.signupSuccess(user));
  } else {
    const message = response.data.message;
    yield put(AuthActions.signupFailure(message));
  }
}

export function * getUser (api, action) {
  const { token } = action
  // make the call to the api
  const response = yield call(api.getUser, token);

  if (response.ok && response.data.success) {
    const user = response.data.user;
    // do data conversion here if needed
    yield put(AuthActions.userSuccess(user))
  } else {
    const message = response.message;
    yield put(AuthActions.userFailure(message))
  }
}
