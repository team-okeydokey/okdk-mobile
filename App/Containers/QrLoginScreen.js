import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import Camera from 'react-native-camera';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/QrLoginScreenStyle'


class QrLoginScreen extends Component {

  takePicture() {
    this.camera.capture()
       .then((data) => console.log(data))
       .catch(err => console.error(err));
  }

  render () {
    return (
      <Camera
   ref={(cam) => {
       this.camera = cam;
    }}
    style={styles.preview}
    aspect={Camera.constants.Aspect.fill}>
       <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
          [CAPTURE]
       </Text>
</Camera>
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

export default connect(mapStateToProps, mapDispatchToProps)(QrLoginScreen)
