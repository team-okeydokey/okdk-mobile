import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/ChatListItemStyle'
import LinearGradient from 'react-native-linear-gradient'

export default class ChatListItem extends Component {
  static propTypes = {
    name: PropTypes.string,
    latest: PropTypes.string,
    addresss: PropTypes.string,
    date: PropTypes.string,
    index: PropTypes.number
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

        <View style={styles.chatContainer}>

          <LinearGradient
              style={styles.gradient}
              colors={this.getIconColors(this.props.address)}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
          >

          </LinearGradient>


          <View style={styles.chatTextContainer}>
            <Text style={styles.chatName}>{this.props.name}</Text>
            <Text style={styles.latest}>{this.props.latest}</Text>
          </View>

        </View>

        <Text style={styles.date}>{this.props.date}</Text>

      </View>
    )
  }
}
