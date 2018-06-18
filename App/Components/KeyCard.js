import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
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
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
      </View>
    )
  }
}
