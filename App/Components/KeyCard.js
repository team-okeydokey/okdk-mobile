import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/KeyCardStyle'

export default class KeyCard extends Component {
  // Prop type warnings
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  
  // Defaults for props
  static defaultProps = {
    title: "",
  }

  render () {
    return (
      <View style={styles.keyCard}>

        <View style={styles.keyCardImage}>
          
        </View>
        
        <View style={styles.keyCardInfo}>
          <Text style={styles.keyCardTitle}>{this.props.title}</Text>
        </View>

        <View style={styles.keyCardButtonContainer}>

          <TouchableOpacity 
            style={styles.openButton}>
            <Text style={styles.openText}>Open</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>

        </View>

      </View>
    )
  }
}
