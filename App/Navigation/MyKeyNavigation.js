import { StackNavigator } from 'react-navigation'

import MyKeyScreen from '../Containers/MyKeyScreen'
import DeviceActionScreen from '../Containers/DeviceActionScreen'

import styles from './Styles/NavigationStyles'

const MyKeyNav = StackNavigator({
  MyKeyScreen: { screen: MyKeyScreen,
  	 navigationOptions: ({ navigation }) => ({
  	 	title: 'My Key',
  	}),
  },
  DeviceActionScreen: { screen: DeviceActionScreen,
  	 navigationOptions: ({ navigation }) => ({
  	 	title: 'Device Actions',
  	}),
  },
},{
  headerMode: 'float',
  navigationOptions: {
    headerStyle: styles.header,
    tabBarLabel: 'My Key'
  },
});

export default MyKeyNav