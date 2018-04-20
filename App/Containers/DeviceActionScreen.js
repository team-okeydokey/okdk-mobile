import React, { Component } from 'react'
import { View, Image, ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'
import { Images } from '../Themes/'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DeviceActionScreenStyle'

class DeviceActionScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>

        <View style={styles.imageContainer}>
          <Image
            source={Images.device1}
            style={styles.image}
            resizeMode={Image.resizeMode.cover}
          />
        </View>

        <View style={styles.deviceInfoContainer}>
          <Text style={styles.deviceInfoName}>{this.props.name}</Text>

          <View style={styles.inline}>
            <Text style={styles.deviceInfoLabel}>Address: </Text>
            <Text style={styles.deviceInfoValue}
                  numberOfLines={1}>{this.props.address}
            </Text>
          </View>

          <View style={styles.inline}>
            <Text style={styles.deviceInfoLabel}>Description: </Text>
            <Text style={styles.deviceInfoValue}
                  numberOfLines={2}>{this.props.description}
            </Text>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <RoundedButton
            text='Open lock'
            onPress={() => window.alert('Rounded Button Pressed!')}
          />
          <RoundedButton
            text='Close lock'
            onPress={() => window.alert('Rounded Button Pressed!')}
          />
        </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.device.name,
    address: state.device.address,
    description: state.device.description,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceActionScreen)
