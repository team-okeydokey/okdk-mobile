import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/ActivityStyle'
import { Colors } from '../Themes/'


export default class Activity extends Component {
  // Prop type warnings
  static propTypes = {
    activity: PropTypes.string.isRequired,
    staffName: PropTypes.string.isRequired,
    staffType: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired
  }
  
  // Defaults for props
  static defaultProps = {
    activity: "",
    staffName: "",
    staffType: "",
    timestamp: ""
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
        <View style={styles.staffInfoContainer}>
          <Text style={[styles.staffType, descriptionStyle]}>{this.props.staffType}</Text>
          <Text style={styles.staffName}>{this.props.staffName}</Text>
        </View>
        <Text style={styles.timestamp}>{this.props.timestamp}</Text>
      </View>
    )
  }
}
