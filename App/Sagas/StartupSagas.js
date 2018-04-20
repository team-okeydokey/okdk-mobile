import { put, select } from 'redux-saga/effects'
import AppStateActions from '../Redux/AppStateRedux'
import StartupActions from '../Redux/StartupRedux'
import LoggedInActions, { isLoggedIn } from '../Redux/LoginRedux'
import { NavigationActions } from 'react-navigation'
import { is } from 'ramda'

// exported to make available for tests
export const selectLoggedInStatus = (state) => isLoggedIn(state.login)

// process STARTUP actions
export function * startup (action) {

  yield put(AppStateActions.setRehydrationComplete())
  const isLoggedIn = yield select(selectLoggedInStatus)
  if (isLoggedIn) {
    yield put(LoggedInActions.autoLogin())
  } else {
    // Not logged in! Show welcome screen.
    yield put(NavigationActions.navigate({ routeName: 'WelcomeScreen' }));
  }
}
