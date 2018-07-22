import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import KeyCardActions from '../Redux/KeyCardRedux'
import { getUser } from '../Redux/AuthRedux'

export function * shareKey (api, action) {

  const { token, email } = action

  // make the call to the api
  const response = yield call(api.shareKey, token, email)

  if (response.ok) {
    const shared = response.data.success;
    
    if (shared) {
      yield put(KeyCardActions.shareSuccess());
      return;
    }  
  }

  let message = response.data ? response.data.message : "Server error";
  yield put(KeyCardActions.shareFailure(message));
}