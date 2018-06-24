import React, { Component } from 'react'
import { ScrollView, View, ImageBackground, Text, TouchableOpacity, 
  TextInput, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
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
      <View style={styles.imageBackgroundDim}> 
      <ScrollView>
      <KeyboardAvoidingView behavior='position'>        

            <View style={styles.loginForm}>
              <TextInput
                style={ styles.email }
                placeHolder={"Email"}
              />
              <TextInput
                style={ styles.password }
                placeHolder={"Password"}
              />

              <TouchableOpacity style={ styles.loginButton }>
                <Text style={ styles.loginButtonText }>Log in</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text style={ styles.signupButtonText }>Sign up</Text>
            </TouchableOpacity>

          
        
     
      </KeyboardAvoidingView>
      </ScrollView>
      </View>
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
