import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/ActivityStyle'
import { Colors } from '../Themes/'


export default class Activity extends Component {
  // Prop type warnings
  static propTypes = {
    type: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired
  }
  
  // Defaults for props
  static defaultProps = {
    type: 0,
    description: "",
    timestamp: 0,
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
      color: this.getDescriptionColor(this.props.type)
    }

    return (
      <View style={styles.container}>
        <Text style={[styles.description, descriptionStyle]}>{this.props.description}</Text>
        <Text style={styles.timestamp}>{this.props.timestamp}</Text>
      </View>
    )
  }
}
