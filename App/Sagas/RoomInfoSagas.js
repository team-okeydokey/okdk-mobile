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
    const message = response.data.message;
    yield put(RoomInfoActions.logsFailure(message));
  }
}