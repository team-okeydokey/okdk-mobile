import React from 'react'
import { TabNavigator, TabBarBottom } from 'react-navigation'

import DiscoverNav from './DiscoverNavigation'
import InboxNav from './InboxNavigation'
import MyKeyNav from './MyKeyNavigation'
import KeyTokenNav from './KeyTokenNavigation'
import ProfileNav from './ProfileNavigation'

import { Icon } from 'Icon/react-native-vector-icons/dist/SimpleLineIcons';

import { Colors } from '../Themes/'
import styles from './Styles/NavigationStyles'

const TabNav = TabNavigator(
  {
    // First tab.
    Discover: { screen: DiscoverNav },
    // Second tab.
    Inbox: { screen: InboxNav },
    // Third tab.
    MyKey: { screen: MyKeyNav },
    // Fourth tab.
    KeyToken: { screen: KeyTokenNav },
    // Fifth tab.
    Profile: { screen: ProfileNav }
  }, 
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Discover') {
          iconName = "home";
        } else if (routeName === 'Inbox') {
          iconName = "envelope";
        } else if (routeName === 'MyKey') {
          iconName = "key";
        } else if (routeName === 'KeyToken') {
          iconName = "chart";
        } else if (routeName === 'Profile') {
          iconName = "user";
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (<Icon name={iconName} size={25} color={tintColor}/>);
      },
    }),
    tabBarOptions: {
      showIcon: true,
      activeTintColor: Colors.facebook,
      inactiveTintColor: Colors.tabBarInactiveTint,
      style: styles.tabBar
    },
    ...TabNavigator.Presets.iOSBottomTabs, // or AndroidTopTabs
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
) 

export default TabNav
