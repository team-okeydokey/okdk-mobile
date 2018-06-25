import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import LoginActions from '../Redux/LoginRedux'

export function * login (api, action) {
  const { email, password } = action
  // make the call to the api
  const response = yield call(api.login, username, password)

  if (response.ok) {
    const token = path(['token'], response)
    // do data conversion here if needed
    yield put(LoginActions.success(token))
  } else {
    const message = path(['message'], response)
    yield put(LoginActions.failure(message))
  }
}

export function * signup (api, action) {
  const { email, password } = action
  // make the call to the api
  const response = yield call(api.login, username, password)

  if (response.ok) {
    const token = path(['token'], response)
    // do data conversion here if needed
    yield put(LoginActions.success(token))
  } else {
    const message = path(['message'], response)
    yield put(LoginActions.failure(message))
  }
}
