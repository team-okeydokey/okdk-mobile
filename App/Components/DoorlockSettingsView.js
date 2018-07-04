import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { Colors, Fonts } from '../Themes/'
import styles from './Styles/DoorlockSettingsViewStyle'

class DoorlockSettingsView extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.passcodeChangeForm}> 
          <Text style={styles.sectionTitle}>Change passcode</Text>
          <TextInput
            style={ styles.textInput }
            placeholder="Enter passcode"
            placeholderTextColor={ Colors.steel }
            underlineColorAndroid={ Colors.text }
            numberOfLines={1}
            secureTextEntry={true}
            keyboardType="numeric"
          />
          <TextInput
            style={ styles.textInput }
            placeholder="Confirm passcode"
            placeholderTextColor={ Colors.steel }
            underlineColorAndroid={ Colors.text }
            numberOfLines={1}
            secureTextEntry={true}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.changePasscodeButton}>
          <Text style={styles.changePasscodeButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoorlockSettingsView)
