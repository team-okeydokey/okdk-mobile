import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import { Images } from '../Themes/'
import styles from './Styles/DeviceListItemStyle'
import { LinearGradient } from 'expo'

import { SimpleLineIcons } from '@expo/vector-icons';

export default class MyKeyItem extends Component {
  static propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    addresss: PropTypes.string,
    index: PropTypes.number
  }

  getIconName = (index) => {
    switch (index) {
      case 0:
        return 'lock'
      case 1:
        return 'camera'
      case 2: 
        return 'equalizer'
      case 3: 
        return 'game-controller'
      default:
        return 'lock'
    }
  }

  getIconColors = (address) => {
    const startHex = '#' + address.substring(2, 8);
    const middleHex = '#' + address.substring(8, 14);
    const endHex = '#' + address.substring(14, 20);
    // return [startHex, middleHex, endHex];
    return [startHex, endHex];
  }

  render () {
    return (
      <View style={styles.container}>

        <View style={styles.deviceInfoContainer}>

          <LinearGradient
              style={styles.gradient}
              colors={this.getIconColors(this.props.address)}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
          >

          </LinearGradient>


          <View style={styles.deviceTextContainer}>
            <Text style={styles.deviceName}>{this.props.name}</Text>
            <Text style={styles.deviceDescription}>{this.props.description}</Text>
          </View>

        </View>

        <SimpleLineIcons name={'arrow-right'} size={25} />

      </View>
    )
  }
}
