import { StackNavigator } from 'react-navigation'

import MyKeyScreen from '../Containers/MyKeyScreen'

import styles from './Styles/NavigationStyles'

const MyKeyNav = StackNavigator({
  MyKeyScreen: { screen: MyKeyScreen,
  	 navigationOptions: ({ navigation }) => ({
  	 	title: 'My Key',
  	}),
  },
},{
  headerMode: 'float',
  navigationOptions: {
    headerStyle: styles.header
  },
});

export default MyKeyNav