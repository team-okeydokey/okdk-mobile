import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import AuthActions from '../Redux/AuthRedux'

export function * login (api, action) {
  const { email, password } = action
  // make the call to the api
  const response = yield call(api.login, email, password)
  
  if (response.success) {
    const token = response.token;
    // do data conversion here if needed
    yield put(AuthActions.loginSuccess(token))
  } else {
    const message = response.message;
    yield put(AuthActions.loginFailure(message))
  }
}

export function * signup (api, action) {
  const { firstname, lastname, email, password, hasCode, code } = action
  // make the call to the api
  const response = yield call(api.signup, firstname, lastname, 
    email, password, hasCode, code)

  if (response.success) {
    const token = response.token;
    // do data conversion here if needed
    yield put(AuthActions.signupSuccess(token))
  } else {
    const message = response.message;
    yield put(AuthActions.signupFailure(message))
  }
}
