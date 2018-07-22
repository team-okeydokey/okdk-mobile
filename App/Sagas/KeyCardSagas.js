import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import KeyCardActions from '../Redux/KeyCardRedux'
import { getUser } from '../Redux/AuthRedux'

export const selectUserInStatus = (state) => getUser(state.auth)

export function * shareKey (api, action) {

  const user = yield select(selectUserInStatus);

  // make the call to the api
  const response = yield call(api.open, user.token)

  if (response.ok) {
    const shared = response.data.success;
    
    if (shared) {
      yield put(KeyCardActions.shareSuccess());
      return;
    }  
  }
  yield put(KeyCardActions.shareFailure());
}