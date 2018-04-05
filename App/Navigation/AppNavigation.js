import { StackNavigator } from 'react-navigation'
import WelcomeScreen from '../Containers/WelcomeScreen'
import ProfileScreen from '../Containers/ProfileScreen'
import KeyTokenScreen from '../Containers/KeyTokenScreen'
import MyKeyScreen from '../Containers/MyKeyScreen'
import InboxScreen from '../Containers/InboxScreen'
import DiscoverScreen from '../Containers/DiscoverScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  ProfileScreen: { screen: ProfileScreen },
  KeyTokenScreen: { screen: KeyTokenScreen },
  MyKeyScreen: { screen: MyKeyScreen },
  InboxScreen: { screen: InboxScreen },
  DiscoverScreen: { screen: DiscoverScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
