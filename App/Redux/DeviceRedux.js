import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
	select : ['device'], // Select current device being manipulated.
	first : ['device'], // Trigger action 1.
	second : ['device'], // Trigger action 2.
})

export const TemperatureTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  name: 'INITIAL',
  address: 'INITIAL',
  description: 'INITIAL',
})

/* ------------- Reducers ------------- */

export const select = (state, { device }) => {
  return state.merge({ name: device.name, 
  										 address: device.address, 
  										 description: device.description })
}

export const activate = (state, { device }) => {
  return state
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
	[Types.SELECT]: select,
  [Types.FIRST]: activate,
  [Types.SECOND]: activate,
})
