import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  openDashboard: null,
  closeDashboard: null,
  selectTab: ['index']
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isOpen: false,
  currentTab: 0,
  title: "Door Activity",
})

/* ------------- Reducers ------------- */

export const openDashboard = (state) => state.merge({isOpen: true })

export const closeDashboard = (state) => state.merge({isOpen: false })

export const selectTab = (state, {index}) => 
  state.merge({currentTab: index,  title: getTabNameByIndex(index)})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.OPEN_DASHBOARD]: openDashboard,
  [Types.CLOSE_DASHBOARD]: closeDashboard,
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
    default: return "";
  }
}