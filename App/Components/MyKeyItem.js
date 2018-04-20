import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Images } from '../Themes/'
import styles from './Styles/MyKeyItemStyle'
import LinearGradient from 'react-native-linear-gradient'

import { Icon } from 'react-native-elements'

export default class MyKeyItem extends Component {
  static propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    address: PropTypes.string,
    index: PropTypes.number,
    onPress: PropTypes.func
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

  onPress = () => {
    this.props.onPress(this.props);
  }

  render () {
    return (
      <TouchableOpacity onPress={this.onPress}>
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

        <Icon type={'simple-line-icon'} name={'arrow-right'} size={25} />

      </View>
      </TouchableOpacity>
    )
  }
}
