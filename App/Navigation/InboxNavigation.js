import { StackNavigator } from 'react-navigation'

import InboxScreen from '../Containers/InboxScreen'

import styles from './Styles/NavigationStyles'

const InboxNav = StackNavigator({
  InboxScreen: { screen: InboxScreen,
  	 navigationOptions: ({ navigation }) => ({
     	title: 'Inbox',
  	}),
  },
},{
  headerMode: 'float',
  navigationOptions: {
    headerStyle: styles.header
  },
});

export default InboxNav