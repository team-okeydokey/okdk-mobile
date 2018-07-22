import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import RoomInfoActions from '../Redux/RoomInfoRedux'

export function * getAccessLogs (api, action) {
  const { roomId } = action
  // make the call to the api
  const response = yield call(api.getAccessLogs, roomId);
  if (response.ok && response.data.success) {
    const logs = response.data.activity_logs;
    // do data conversion here if needed
    yield put(RoomInfoActions.logsSuccess(logs));
  } else {
    let message = response.data ? response.data.message : "Server error";
    yield put(RoomInfoActions.logsFailure(message));
  }
}