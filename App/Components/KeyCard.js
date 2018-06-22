import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Foundation';
import styles from './Styles/KeyCardStyle'

export default class KeyCard extends Component {
  
  // Delete constructor after implementing redux
  constructor(props) {
    super(props);
    this.state = {testText: "Server test output"};
    this._onOpen = this._onOpen.bind(this);
  }

  // Prop type warnings
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }
  
  // Defaults for props
  static defaultProps = {
    title: "",
    description: "",
  }

  async _onOpen() {
    // fetch('http://18.220.28.85:5000/api/v1/open');
    // fetch('http://www.mocky.io/v2/5b268f9f3000008e00ee278c');
    try {
      let response = await fetch(
        'http://18.220.28.85:5000/api/v1/open'
      );
      const text = await response.text();
      const data = JSON.parse(text);
      this.setState(prevState => ({
        testText: JSON.stringify(data)
      }));
    } catch (error) {
      this.setState(prevState => ({
        testText: "Response contains error."
      }));
    }
  }

  _onClose() {
    fetch('');
  }

  render () {
    return (
      <View style={styles.keyCard}>

        <View style={styles.keyCardInfoContainer}>
          <View style={styles.keyCardImageContainer}>
            <Icon name="crown" size={75} color="#2d2d2d" />
          </View>
          
          <View style={styles.keyCardInfo}>
            <Text style={styles.keyCardTitle}
                 numberOfLines={1}>{this.props.title}</Text>
            <Text style={styles.keyCardDescription} 
                  numberOfLines={2}>{this.props.description}</Text>
          </View>
        </View>

        <View style={styles.keyCardButtonContainer}>

          <TouchableOpacity 
            onPress={this._onOpen}
            style={styles.openButton}>
            <Text style={styles.openText}>Open</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>

        </View>

      {/* <Text>{this.state.testText}</Text>   */}
      </View>
    )
  }
}
