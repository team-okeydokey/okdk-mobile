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

  _infoDisplay(title, value) {
    return (
      <View style={styles.infoDisplay}> 
        <Text style={styles.infoTitle}> 
          {title}
        </Text>
        <Text style={styles.infoValue}> 
          {value}
        </Text> 
      </View>
    );
  }

  render () {
    return (
      <View style={styles.container}>

        { this._infoDisplay("BOOKING NUMBER", this.props.bookingNumber) }
        <View style={styles.timeInfo}>
          { this._infoDisplay("CHECK IN", this.props.checkIn) }
          { this._infoDisplay("CHECK OUT", this.props.checkOut) }
        </View>
        { this._infoDisplay("HOTEL NAME", this.props.hotelName) }
        { this._infoDisplay("ADDRESS", this.props.address) }
        { this._infoDisplay("ROOM TYPE", this.props.roomType) }
        { this._infoDisplay("ROOM NUMBER", this.props.roomNumber) }
        
      </View>
    )
  }
}
