import { NavigationActions } from 'react-navigation'
import AppNavigation from '../Navigation/AppNavigation'

const { navigate, reset } = NavigationActions
const { getStateForAction } = AppNavigation.router

const INITIAL_STATE = getStateForAction(
  navigate({ routeName: 'DiscoverNav' })
)

const LOGGED_OUT_STATE = getStateForAction(
  navigate({ routeName: 'WelcomeScreen' })
)

// const LOGGED_IN_STATE = getStateForAction(reset({
//   index: 0,
//   actions: [
//     NavigationActions.navigate({ routeName: 'DiscoverScreen' })
//   ]
// }))

const LOGGED_IN_STATE = getStateForAction(
  navigate({ routeName: 'DiscoverNav' })
)

export const reducer = (state = INITIAL_STATE, action) => {

  // console.log("-----------------------------");
  // console.log("State:", state);
  // console.log("Action:", action);
  // console.log("-----------------------------");

  let newState
  switch (action.type) {
    case 'LOGOUT':
      return LOGGED_OUT_STATE
    case 'LOGIN_SUCCESS':
      return LOGGED_IN_STATE
    case 'AUTO_LOGIN':
      return LOGGED_IN_STATE
  }

  newState = getStateForAction(action, state)
  return newState || state
}
