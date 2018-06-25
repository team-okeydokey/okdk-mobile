import React, { Component } from 'react'
import { ScrollView, View, ImageBackground, Text, TouchableOpacity, 
  TextInput, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Colors, Metrics } from '../Themes/'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AuthScreenStyle'

class AuthScreen extends Component {

  constructor(props) {
    super(props);

    this._showLogin = this._showLogin.bind(this);
    this._showSignup = this._showSignup.bind(this);
  }

  _showLogin() {
    this.scrollView.scrollTo({x: 0, y: 0, animated: true})
  }

  _showSignup() {
    this.scrollView.scrollTo({x: Metrics.screenWidth, y: 0, animated: true})
  }

  render () {
    return (
      
      <ImageBackground
      style={styles.imageBackground}
      resizeMode='cover'
      source={require('../Images/login_background.jpg')}>
      
        <Text style={ styles.slogan }>Okeee</Text>

        <ScrollView ref={ref => this.scrollView = ref}
          style={styles.authCarousel} 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          snapToInterval={Metrics.screenWidth}
          snapToAlignment={"start"}
          >
        
          {/* login panel */}
          <View style={styles.loginPanel}> 
            <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior='padding'>
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

              <TouchableOpacity style={ styles.authButton }>
                <Text style={ styles.authButtonText }>Log in</Text>
              </TouchableOpacity>
              
            </View>
            </KeyboardAvoidingView> 

            <TouchableOpacity style={ styles.authAlternateButton} onPress={this._showSignup}>
                <Text style={ styles.authAlternateButtonText }>Sign up</Text>
            </TouchableOpacity>
          </View>

          {/* Signup panel */}
          <View style={styles.signupPanel}> 
            <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior='padding'>
            <View style={styles.loginForm}>
            
              <View style={styles.signupInput}>
                <TextInput
                  style={ styles.firstname }
                  placeholder="First name"
                  placeholderTextColor={ Colors.steel }
                  underlineColorAndroid={ Colors.text }
                  numberOfLines={1}
                />
                <TextInput
                  style={ styles.lastname }
                  placeholder="Last name"
                  placeholderTextColor={ Colors.steel }
                  underlineColorAndroid={ Colors.text }
                  numberOfLines={1}
                />
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

              <TouchableOpacity style={ styles.authButton }>
                <Text style={ styles.authButtonText }>Sign up</Text>
              </TouchableOpacity>
              
            </View>
            </KeyboardAvoidingView> 

            <TouchableOpacity style={ styles.authAlternateButton} onPress={this._showLogin}>
                <Text style={ styles.authAlternateButtonText }>Log in</Text>
            </TouchableOpacity>
          </View>

          
        </ScrollView>

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

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen)
