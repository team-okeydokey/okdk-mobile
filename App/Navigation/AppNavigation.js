import { StackNavigator } from 'react-navigation'
import QrLoginScreen from '../Containers/QrLoginScreen'
import QrScannerScreen from '../Containers/QrScannerScreen'
import SignupScreen from '../Containers/SignupScreen'
import AuthScreen from '../Containers/AuthScreen'
import HomeScreen from '../Containers/HomeScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  QrLoginScreen: { screen: QrLoginScreen },
  QrScannerScreen: { screen: QrScannerScreen },
  SignupScreen: { screen: SignupScreen },
  AuthScreen: { screen: AuthScreen },
  HomeScreen: { screen: HomeScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
