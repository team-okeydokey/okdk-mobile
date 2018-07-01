import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/BookingInfoViewStyle'

export default class BookingInfoView extends Component {
  // Prop type warnings
  static propTypes = {
    bookingNumber: PropTypes.string.isRequired,
    checkIn: PropTypes.string.isRequired,
    checkOut: PropTypes.string.isRequired,
    hotelName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    roomType: PropTypes.string.isRequired,
    roomNumber: PropTypes.string.isRequired,
  }
  //
  // Defaults for props
  static defaultProps = {
    bookingNumber: "",
    checkIn: "",
    checkOut: "",
    hotelName: "",
    address: "",
    roomType: "",
    roomNumber: "",
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>BookingInfoView Component</Text>
      </View>
    )
  }
}
