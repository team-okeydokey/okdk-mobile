import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  open: ['deviceId'],
  close: ['deviceId'],
  success: ['deviceId'],
  failure: ['deviceId'],
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
export const open = (state, { deviceId }) =>
  state.merge({ fetching: true, error: null })

// Request close.
export const close = (state, { deviceId }) => {
  const { avatar } = action
  return state.merge({ fetching: true, error: null })
}

// Successful device action.
export const success = (state, { deviceId }) => {
  state.merge({ fetching: true, error: null })
}

// Failed to initiate action.
export const failure = (state, { deviceId }) => {
  state.merge({ fetching: false, error: true})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.OPEN]: open,
  [Types.CLOSE]: close,
  [Types.SUCCESS]: success,
  [Types.FAILURE]: failure,
})
