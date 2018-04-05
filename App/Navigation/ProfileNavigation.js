import { StackNavigator } from 'react-navigation'

import ProfileScreen from '../Containers/ProfileScreen'

import styles from './Styles/NavigationStyles'

const ProfileNav = StackNavigator({
  ProfileScreen: { screen: ProfileScreen,
  	 navigationOptions: ({ navigation }) => ({
  	 	title: 'Profile',
  	}),
  },
},{
  headerMode: 'float',
  navigationOptions: {
    headerStyle: styles.header
  },
});

export default ProfileNav