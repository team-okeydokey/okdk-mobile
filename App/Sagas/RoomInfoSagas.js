import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import RoomInfoActions from '../Redux/RoomInfoRedux'

export function * getAccessLogs (api, action) {
  const { roomId } = action
  // make the call to the api
  const response = yield call(api.getAccessLogs, roomId);
  console.log(response);
  if (response.ok && response.data.success) {
    const logs = response.data.activity_logs;
    // do data conversion here if needed
    yield put(RoomInfoActions.logsSuccess(logs));
  } else {
    let message = response.data ? response.data.message : "Server error";
    yield put(RoomInfoActions.logsFailure(message));
  }
}

export function * setDoNotDisturb (api, action) {
  const { token, turnOn } = action
  // make the call to the api
  let intOn = turnOn ? 1 : 0;
  const response = yield call(api.setDoNotDisturb, token, intOn);
  console.log(response);
  if (response.ok && response.data.success) {
    // do data conversion here if needed
    yield put(RoomInfoActions.doNotDisturbSuccess());
  } else {
    let message = response.data ? response.data.message : "Server error";
    yield put(RoomInfoActions.doNotDisturbFailure(message));
  }
}