import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  rotate: ['index'],
})

export const TemperatureTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  bannerEntries: [{'title': 'Hello'}, 
                  {'title': 'Yellow'}],
  activeSlide: 0,
})

/* ------------- Reducers ------------- */

export const rotateBanner = (state, { index }) => {
  const activeSlide = index % 5
  return state.merge({ activeSlide: activeSlide})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ROTATE]: rotateBanner,
})
