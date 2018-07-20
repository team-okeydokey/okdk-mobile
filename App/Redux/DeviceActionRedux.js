import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  open: ['token'],
  resetPw: ['token'],
  close: ['token'],
  success: null,
  failure: null,
})

export const DeviceActionTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
})

/* ------------- Reducers ------------- */

// Request open.
export const open = (state, action) => {
  return state.merge({ fetching: true, error: null })
}

// Request close.
export const close = (state, action) => {
  return state.merge({ fetching: true, error: null })
}

// Request reset password.
export const resetPw = (state, action) => {
  return state.merge({ fetching: true, error: null })
}

// Successful device action.
export const success = (state, action) => {
  return state.merge({ fetching: true, error: null })
}

// Failed to initiate action.
export const failure = (state, action) => {
  return state.merge({ fetching: false, error: true})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.OPEN]: open,
  [Types.CLOSE]: close,
  [Types.RESET_PW]: resetPw,
  [Types.SUCCESS]: success,
  [Types.FAILURE]: failure,
})
