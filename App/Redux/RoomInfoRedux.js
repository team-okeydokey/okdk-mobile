import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  logsRequest: ['roomId'],
  logsSuccess: ['logs'],
  logsFailure: ['message']
})

export const RoomInfoTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  logs: [],
  logsFetching: false, 
  logsError: null
})

/* ------------- Reducers ------------- */

export const logsRequest = (state, action) => state.merge({ logsFetching: true })

export const logsSuccess = (state, action) => {
  const { logs } = action;
  return state.merge({ logsFetching: false, logsError: null, logs: logs });
}

export const logsFailure = (state, action) => {
  const { message } = action;
  return state.merge({ logsFetching: false, logsError: message });
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGS_REQUEST]: logsRequest,
  [Types.LOGS_SUCCESS]: logsSuccess,
  [Types.LOGS_FAILURE]: logsFailure
})

/* ------------- Selectors ------------- */