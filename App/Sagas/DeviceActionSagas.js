import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import DeviceActions from '../Redux/DeviceActionRedux'

export function * open (api, action) {
  const { deviceId } = action
  // make the call to the api
  const response = yield call(api.open, deviceId)

  if (response.ok) {
    const opened = path(['success'], response);
    
    if (opened) {
      yield put(DeviceActions.success(deviceId));
      return;
    }  
  }
  yield put(DeviceActions.failure(deviceId));
}

export function * close (api, action) {
  const { deviceId } = action
  // make the call to the api
  const response = yield call(api.close, deviceId)

  if (response.ok) {
    const closed = path(['success'], response);
    
    if (closed) {
      yield put(DeviceActions.success(deviceId));
      return;
    } 
  }
  yield put(DeviceActions.failure(deviceId));
}

