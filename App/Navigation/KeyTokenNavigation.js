import { StackNavigator } from 'react-navigation'

import KeyTokenScreen from '../Containers/KeyTokenScreen'

import styles from './Styles/NavigationStyles'

const KeyTokenNav = StackNavigator({
  KeyTokenScreen: { screen: KeyTokenScreen,
  	 navigationOptions: ({ navigation }) => ({
     	title: 'Key Token',
  	}),
  },
},{
  headerMode: 'float',
  navigationOptions: {
    headerStyle: styles.header
  },
});

export default KeyTokenNav