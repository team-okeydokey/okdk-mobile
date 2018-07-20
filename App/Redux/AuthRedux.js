import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],
  loginSuccess: ['user'],
  loginFailure: ['message'],
  logout: null,
  autoLogin: null,
  signupRequest: ['email', 'password1', 'password2'],
  signupSuccess: ['user'],
  signupFailure: ['message'],
  userRequest: ['token'],
  userSuccess: ['user'],
  userFailure: ['message'],
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  user: null,
  loginError: null,
  loginFetching: false,
  signupError: null,
  signupFetching: false,
  signupError: null,
  signupFetching: false,
})

/* ------------- Reducers ------------- */

// we're attempting to login
export const loginRequest = (state, { email, password }) => state.merge({ loginFetching: true })

// we've successfully logged in
export const loginSuccess = (state, action) => {
  const { user } = action;
  return state.merge({ loginFetching: false, loginError: null, user: user });
}

// we've had a problem logging in
export const loginFailure = (state, action) => {
  const { message } = action;
  return state.merge({ loginFetching: false, loginError: message });
}

// we've logged out
export const logout = (state) => INITIAL_STATE

// startup saga invoked autoLogin
export const autoLogin = (state) => state

// Signup actions.
export const signupRequest = (state, { email, password1, password2 }) => state.merge({ signupFetching: true })

export const signupSuccess = (state, action) => {
  const { user } = action;
  return state.merge({ signupFetching: false, signupError: null, user: user });
}

export const signupFailure = (state, action) => {
  const { message } = action;
  return state.merge({ signupFetching: false, signupError: message });
}

// User data actions.
export const userRequest = (state, { token }) => state.merge({ userFetching: true })

export const userSuccess = (state, action) => {
  const { user } = action;
  return state.merge({ userFetching: false, userError: null, user: user });
}

export const userFailure = (state, action) => {
  const { message } = action;
  return state.merge({ userFetching: false, userError: message });
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.LOGOUT]: logout,
  [Types.AUTO_LOGIN]: autoLogin,
  [Types.SIGNUP_REQUEST]: signupRequest,
  [Types.SIGNUP_SUCCESS]: signupSuccess,
  [Types.SIGNUP_FAILURE]: signupFailure,
  [Types.USER_REQUEST]: userRequest,
  [Types.USER_SUCCESS]: userSuccess,
  [Types.USER_FAILURE]: userFailure,
})

/* ------------- Selectors ------------- */

// Is the current user logged in?
export const isLoggedIn = (authState) => authState.user !== null

// Get current user.
export const getUser = (authState) => authState.user