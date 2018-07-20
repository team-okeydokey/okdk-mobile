import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Foundation';
import styles from './Styles/KeyCardStyle'

export default class KeyCard extends Component {
  
  // Delete constructor after implementing redux
  constructor(props) {
    super(props);
  }

  // Prop type warnings
  static propTypes = {
    active: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    passcode: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }
  
  // Defaults for props
  static defaultProps = {
    active: false,
    name: "",
    passcode: ""
  }

  render () {

    let keyCardStyle = {
      "width": this.props.width,
      "height": this.props.height, 
      "borderRadius": this.props.width/2
    };

    let passcodeStyle = {
      opacity: this.props.active ? 1 : 0
    }

    let shareButtonTextStyle = {
      opacity: this.props.active ? 1 : 0,
    }

    return (

      <View style={[styles.keyCard, keyCardStyle]}>

        <Text style={styles.myKeyTitle}
              numberOfLines={1}>MY KEY</Text>

        <View style={styles.keyCardInfoContainer}>
          <Text style={styles.keyCardName}
              numberOfLines={2}>{this.props.name.toUpperCase()}</Text>
          <Text style={[styles.passcodeLabel, passcodeStyle]}
              numberOfLines={1}>PASSCODE</Text>
          <Text style={styles.passcodeValue}
              numberOfLines={1}>{this.props.passcode}</Text>
        </View>

        <TouchableOpacity style={styles.shareButton}
          disabled={!this.props.active}>
          <Text style={[styles.shareButtonText, shareButtonTextStyle]}>SHARE</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
