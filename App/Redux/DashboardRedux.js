import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  open: null,
  close: null
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  open: false
})

/* ------------- Reducers ------------- */

export const open = (state) => state.merge({open: true })

export const close = (state) => state.merge({open: false })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.OPEN]: open,
  [Types.CLOSE]: close,
})

/* ------------- Selectors ------------- */

export const isOpen = (dashboardState) => dashboardState.open