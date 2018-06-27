import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  slide: ['index']
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  activeSlide: 0
})

/* ------------- Reducers ------------- */

export const slide = (state, { index }) => state.merge({ activeSlide: index })
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SLIDE]: slide,
})

/* ------------- Selectors ------------- */