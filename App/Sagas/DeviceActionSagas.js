import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import DeviceActions from '../Redux/DeviceActionRedux'
import { getUser } from '../Redux/AuthRedux'

export const selectUserInStatus = (state) => getUser(state.auth)

export function * open (api, action) {

  const user = yield select(selectUserInStatus);

  // make the call to the api
  const response = yield call(api.open, user.token)

  if (response.ok) {
    const opened = response.data.success;
    
    if (opened) {
      yield put(DeviceActions.success());
      return;
    }  
  }
  yield put(DeviceActions.failure());
}

export function * close (api, action) {

  const user = yield select(selectUserInStatus);

  // make the call to the api
  const response = yield call(api.close, user.token)

  if (response.ok) {
    const closed = response.data.success;
    
    if (closed) {
      yield put(DeviceActions.success());
      return;
    } 
  }
  yield put(DeviceActions.failure());
}

export function * resetPw (api, action) {

  const user = yield select(selectUserInStatus);

  const { newPw } = action;

  // make the call to the api
  const response = yield call(api.resetPw, user.token, newPw)

  if (response.ok) {
    const closed = path(['success'], response);
    
    if (closed) {
      yield put(DeviceActions.success());
      return;
    } 
  }
  yield put(DeviceActions.failure());
}

