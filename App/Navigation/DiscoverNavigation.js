import React from 'react'

import { StackNavigator } from 'react-navigation'

import DiscoverScreen from '../Containers/DiscoverScreen'

import styles from './Styles/NavigationStyles'

const DiscoverNav = StackNavigator({
  DiscoverScreen: { screen: DiscoverScreen,
  	 navigationOptions: ({ navigation }) => ({
  	 	title: 'Discover',
  	}),
  },
},{
  headerMode: 'float',
  navigationOptions: {
    headerStyle: styles.header,
  },
});

export default DiscoverNav