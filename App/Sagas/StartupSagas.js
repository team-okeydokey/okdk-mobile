import { put, select, take } from 'redux-saga/effects'
import AuthActions, { isLoggedIn, getUser, AuthTypes } from '../Redux/AuthRedux'
import { NavigationActions } from 'react-navigation'
import { is } from 'ramda'

// exported to make available for tests
export const selectLoggedInStatus = (state) => isLoggedIn(state.auth)
export const selectUserInStatus = (state) => getUser(state.auth)

// process STARTUP actions
export function * startup (action) {
  if (__DEV__ && console.tron) {
    // straight-up string logging
    console.tron.log('Hello, I\'m an example of how to log via Reactotron.')

    // logging an object for better clarity
    console.tron.log({
      message: 'pass objects for better logging',
      // someGeneratorFunction: selectAvatar
    })

    // fully customized!
    const subObject = { a: 1, b: [1, 2, 3], c: true }
    subObject.circularDependency = subObject // osnap!
    console.tron.display({
      name: '🔥 IGNITE 🔥',
      preview: 'You should totally expand this',
      value: {
        '💃': 'Welcome to the future!',
        subObject,
        someInlineFunction: () => true,
        someGeneratorFunction: startup,
        // someNormalFunction: selectAvatar
      }
    })
  }
  
  // Check login state.
  const loggedIn = yield select(selectLoggedInStatus);

  if (loggedIn) {
    const user = yield select(selectUserInStatus);
    yield put(AuthActions.userRequest(user.token));
    yield take([AuthTypes.USER_SUCCESS, AuthTypes.USER_FAILURE]);
    yield put(AuthActions.autoLogin());
  } 

}
