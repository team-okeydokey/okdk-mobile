import React, { Component } from 'react'
import { ScrollView, View, ImageBackground, Text, TouchableOpacity, 
  TextInput, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { CheckBox } from 'react-native-elements'
import { Colors, Metrics } from '../Themes/'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import AuthActions, { isLoggedIn } from '../Redux/AuthRedux'

// Styles
import styles from './Styles/AuthScreenStyle'

class AuthScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {checked: false};

    this._showLogin = this._showLogin.bind(this);
    this._showSignup = this._showSignup.bind(this);
    this._onCheck = this._onCheck.bind(this);
  }

  _showLogin() {
    this.scrollView.scrollTo({x: 0, y: 0, animated: true})
  }

  _showSignup() {
    this.scrollView.scrollTo({x: Metrics.screenWidth, y: 0, animated: true})
  }

  _onCheck() {
    this.setState({checked: !this.state.checked});
  }

  componentWillUpdate(nextProps, nextState) {
    if (isLoggedIn(nextState)) {
      this.props.goBack();
    }
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

            <View style={styles.loginFiller}/>

            <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior='padding'>
            <View style={styles.inputForm}>

              <View style={styles.inputGroup}>
                <Text style={styles.status}
                  numberOfLines={1}>
                  {this.props.loginMessage}
                </Text>  

                <TextInput
                  style={ styles.textInput }
                  placeholder="Email"
                  placeholderTextColor={ Colors.steel }
                  underlineColorAndroid={ Colors.text }
                  numberOfLines={1}
                />
                <TextInput
                  style={ styles.textInput }
                  placeholder="Password"
                  placeholderTextColor={ Colors.steel }
                  underlineColorAndroid={ Colors.text }
                  numberOfLines={1}
                  secureTextEntry={true}
                />
              </View>

              <TouchableOpacity style={ styles.authButton }
                onPress={ this.props.onLoginButtonClick }>
                <Text style={ styles.authButtonText }>Log in</Text>
              </TouchableOpacity>
              
            </View>
            </KeyboardAvoidingView> 

            <TouchableOpacity style={ styles.signupButton} onPress={this._showSignup}>
                <Text style={ styles.authAlternateButtonText }>Sign up</Text>
            </TouchableOpacity>
          </View>

          {/* Signup panel */}
          <View style={styles.signupPanel}> 

            <View style={styles.signupFiller}/>

            <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior='padding'>
            <View style={styles.inputForm}>    

              <View style={styles.inputGroup}>

                <Text style={styles.status}
                  numberOfLines={1}>
                  {this.props.signupMessage}
                </Text>     

                <TextInput
                  style={ styles.textInput }
                  placeholder="First name"
                  placeholderTextColor={ Colors.steel }
                  underlineColorAndroid={ Colors.text }
                  numberOfLines={1}
                />
                <TextInput
                  style={ styles.textInput }
                  placeholder="Last name"
                  placeholderTextColor={ Colors.steel }
                  underlineColorAndroid={ Colors.text }
                  numberOfLines={1}
                />
                <TextInput
                  style={ styles.textInput }
                  placeholder="Email"
                  placeholderTextColor={ Colors.steel }
                  underlineColorAndroid={ Colors.text }
                  numberOfLines={1}
                />
                <TextInput
                  style={ styles.textInput }
                  placeholder="Password"
                  placeholderTextColor={ Colors.steel }
                  underlineColorAndroid={ Colors.text }
                  numberOfLines={1}
                  secureTextEntry={true}
                />

                <View style={styles.codeGroup}>
                  <CheckBox
                    containerStyle={styles.checkboxContainer}
                    textStyle={styles.checkboxText}
                    title='I have a code'
                    onPress={this._onCheck}
                    checked={this.state.checked}
                  />

                  <TextInput
                    style={ this.state.checked ? styles.codeInput : styles.inactiveCodeInput }
                    placeholder="Code"
                    placeholderTextColor={ Colors.steel }
                    underlineColorAndroid={ Colors.text }
                    numberOfLines={1}
                    editable={this.state.checked}
                  />
                </View>

              </View>

              <TouchableOpacity style={ styles.authButton }
                onPress={ this.props.onSignupButtonClick }>
                <Text style={ styles.authButtonText }>Sign up</Text>
              </TouchableOpacity>
              
            </View>
            </KeyboardAvoidingView> 

            <TouchableOpacity style={ styles.loginButton} onPress={this._showLogin}>
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
    user: state.auth.user,
    loginMessage: state.auth.loginError,
    signupMessage: state.auth.signupError,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginButtonClick: (id) => {
      dispatch(AuthActions.loginRequest('',''));
    },
    onSignupButtonClick: (id) => {
      dispatch(AuthActions.signupRequest('',''));
    },
    goBack: () => {
      dispatch({ type: 'Navigation/BACK' });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen)
