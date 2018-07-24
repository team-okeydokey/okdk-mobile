import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/ActivityStyle'
import { Colors } from '../Themes/'


export default class Activity extends Component {
  // Prop type warnings
  static propTypes = {
    activity: PropTypes.string,
    staffName: PropTypes.string,
    staffType: PropTypes.string,
    timestamp: PropTypes.string,
    guestName: PropTypes.string
  }
  
  // Defaults for props
  static defaultProps = {
    activity: "Managerial",
    staffName: "Hotel",
    staffType: "Staff",
    timestamp: "",
    guestName: "Guest"
  }

  getDescriptionColor(type) {
    switch(type) {
      case 0: return 'black'
      case 1: return Colors.negative
      default: return 'black'
    }
  }

  render () {

    let descriptionStyle = {
      // color: this.getDescriptionColor(this.props.type)
    }
    return (
      <View style={styles.container}>
        <Text style={styles.activity} numberOfLines={2}>{this.props.activity == "" ? "     " : this.props.activity.toUpperCase()}</Text>
        <View style={styles.staffInfoContainer}>
          <Text style={[styles.staffType, descriptionStyle]}>{this.props.staffType == "" ? "     " : this.props.staffType}</Text>
          <Text style={styles.staffName}>{this.props.staffName == "" ? "     " : this.props.staffName}</Text>
        </View>
        <View style={styles.guestInfoContainer}>
          <Text style={styles.timestamp}>{this.props.timestamp == "" ? "     " : this.props.timestamp.substring(0,10)}</Text>
          <Text style={styles.timestamp}>{this.props.timestamp == "" ? "     " : this.props.timestamp.substring(11)}</Text>
          <Text style={styles.guestName}>{this.props.guestName == "" ? "     " : this.props.guestName}</Text>
        </View>
      </View>
    )
  }
}
