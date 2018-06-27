import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Foundation';
import styles from './Styles/KeyCardStyle'

export default class KeyCard extends Component {
  
  // Delete constructor after implementing redux
  constructor(props) {
    super(props);
  }

  // Prop type warnings
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  
  // Defaults for props
  static defaultProps = {
    title: "",
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return true;
  // }

  render () {
    return (
      <View style={styles.keyCard}>

        <Text style={styles.myKeyTitle}
              numberOfLines={1}>MY KEY</Text>

        <View style={styles.keyCardInfoContainer}>
          <Text style={styles.keyCardTitle}
                numberOfLines={2}>{this.props.title}</Text>
        </View>

      </View>
    )
  }
}
