import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { AuthTypes } from '../Redux/AuthRedux'
import { DeviceActionTypes } from '../Redux/DeviceActionRedux';
import { KeyCardTypes } from '../Redux/KeyCardRedux';
import { RoomInfoTypes } from '../Redux/RoomInfoRedux';

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { login, signup } from './AuthSagas'
import { open } from './DeviceActionSagas'
import { shareKey } from './KeyCardSagas'
import { getAccessLogs, setDoNotDisturb } from './RoomInfoSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(AuthTypes.LOGIN_REQUEST, login, api),
    takeLatest(AuthTypes.SIGNUP_REQUEST, signup, api),
    takeLatest(DeviceActionTypes.OPEN, open, api),
    takeLatest(KeyCardTypes.SHARE_REQUEST, shareKey, api),
    takeLatest(RoomInfoTypes.LOGS_REQUEST, getAccessLogs, api),
    takeLatest(RoomInfoTypes.DO_NOT_DISTURB_REQUEST, setDoNotDisturb, api)
  ])
}
