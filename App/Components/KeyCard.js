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
    name: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }
  
  // Defaults for props
  static defaultProps = {
    name: "",
  }

  render () {

    let keyCardStyle = {
      "width": this.props.width,
      "height": this.props.height, 
      "borderRadius": this.props.width/2
    };

    return (
      <View style={[styles.keyCard, keyCardStyle]}>

        <Text style={styles.myKeyTitle}
              numberOfLines={1}>MY KEY</Text>

        <View style={styles.keyCardInfoContainer}>
          <Text style={styles.keyCardName}
              numberOfLines={2}>{this.props.name.toUpperCase()}</Text>
        </View>

      </View>
    )
  }
}
