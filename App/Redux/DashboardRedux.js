import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  open: null,
  close: null,
  selectTab: ['index']
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  open: false,
  currentTab: 0,
  title: "Dashboard",
})

/* ------------- Reducers ------------- */

export const open = (state) => state.merge({open: true })

export const close = (state) => state.merge({open: false })

export const selectTab = (state, {index}) => 
  state.merge({currentTab: index,  title: getTabNameByIndex(index)})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.OPEN]: open,
  [Types.CLOSE]: close,
  [Types.SELECT_TAB]: selectTab
})

/* ------------- Selectors ------------- */

export const isOpen = (dashboardState) => dashboardState.open

export const getCurrentTab = (dashboardState) => dashboardState.currentTab

export const getTabNameByIndex = (index) => {

  switch (index) {
    case 0: return "Booking Info";
    case 1: return "Doorlock Settings";
    case 2: return "Door Activity";
    defult: return "";
  }
}