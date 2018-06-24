import React, { Component } from 'react'
import { ScrollView, View, ImageBackground, Text, TouchableOpacity, 
  TextInput, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Colors } from '../Themes/'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  render () {
    return (
      
      <ImageBackground
      style={styles.imageBackground}
      resizeMode='cover'
      source={require('../Images/login_background.jpg')}>
      
        <Text style={ styles.slogan }>Okeee</Text>

        <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior='position'>
        <View style={styles.loginForm}>
        
          <View style={styles.loginInput}>
            <TextInput
              style={ styles.email }
              placeholder="Email"
              placeholderTextColor={ Colors.steel }
              underlineColorAndroid={ Colors.text }
              numberOfLines={1}
            />
            <TextInput
              style={ styles.password }
              placeholder="Password"
              placeholderTextColor={ Colors.steel }
              underlineColorAndroid={ Colors.text }
              numberOfLines={1}
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity style={ styles.loginButton }>
            <Text style={ styles.loginButtonText }>Log in</Text>
          </TouchableOpacity>
          
        </View>
        </KeyboardAvoidingView>

        <TouchableOpacity style={ styles.signupButton}>
            <Text style={ styles.signupButtonText }>Sign up</Text>
        </TouchableOpacity>

      </ImageBackground>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
