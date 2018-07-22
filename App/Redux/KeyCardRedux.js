import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  slide: ['index'],
  shareRequest: ['token', 'email'],
  shareSuccess: null,
  shareFailure: ['message'],
})

export const KeyCardTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  activeSlide: 0,
  shareError: null,
  shareFetching: false,
})

/* ------------- Reducers ------------- */

export const slide = (state, { index }) => state.merge({ activeSlide: index })

export const shareRequest = (state, { token, email }) => state.merge({ shareFetching: true })

export const shareSuccess = (state, action) => {
  return state.merge({ shareFetching: false, shareError: null });
}

export const shareFailure = (state, action) => {
  const { message } = action;
  return state.merge({ shareFetching: false, shareError: message });
}
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SLIDE]: slide,
  [Types.SHARE_REQUEST]: shareRequest,
  [Types.SHARE_SUCCESS]: shareSuccess,
  [Types.SHARE_FAILURE]: shareFailure,
})

/* ------------- Selectors ------------- */