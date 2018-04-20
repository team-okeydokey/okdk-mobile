import { StackNavigator } from 'react-navigation'
import DeviceActionScreen from '../Containers/DeviceActionScreen'
import TabNav from './TabNavigation'
import WelcomeScreen from '../Containers/WelcomeScreen'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  TabNav: { screen: TabNav },
  WelcomeScreen: { screen: WelcomeScreen },
}, {
  // Default config for all screens
  mode: 'modal',
  headerMode: 'none',
})

export default PrimaryNav
