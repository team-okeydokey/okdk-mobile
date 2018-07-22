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
    
    this.state = {
      checked: false,
      loginEmail: "", 
      loginPassword: "", 
      signupEmail: "", 
      signupPassword1: "", 
      signupPassword2: "",
      signupCode: ""
    };
    
    this._showLogin = this._showLogin.bind(this);
    this._showSignup = this._showSignup.bind(this);
    this._onCheck = this._onCheck.bind(this);
    this._onLoginButtonClick = this._onLoginButtonClick.bind(this);
    this._onSignupButtonClick = this._onSignupButtonClick.bind(this);
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

  _onLoginButtonClick() {
    let email = this.state.loginEmail;
    let password = this.state.loginPassword; 
    this.props.loginRequest(email, password);
  }

  _onSignupButtonClick() {
    let email = this.state.signupEmail;
    let password1 = this.state.signupPassword1;
    let password2 = this.state.signupPassword2; 
    let signupCode = this.state.sugnupCode;
    this.props.signupRequest(email, password1, password2, signupCode);
  }

  componentWillUpdate(nextProps, nextState) {
    if (isLoggedIn(nextProps)) {
      this.props.goBack();
    }
  }

  render () {
    return (
      
      <ImageBackground
      style={styles.imageBackground}
      resizeMode='cover'
      source={require('../Images/login_background.jpg')}>
      
        <Text style={ styles.slogan }>Welcome!</Text>

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
                  onChangeText={(text) => this.setState({loginEmail: text})}
                />
                <TextInput
                  style={ styles.textInput }
                  placeholder="Password"
                  placeholderTextColor={ Colors.steel }
                  underlineColorAndroid={ Colors.text }
                  numberOfLines={1}
                  secureTextEntry={true}
                  onChangeText={(text) => this.setState({loginPassword: text})}
                />
              </View>

              <TouchableOpacity style={ styles.authButton }
                onPress={ this._onLoginButtonClick }>
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

                {/* <TextInput
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
                /> */}
                <TextInput
                  style={ styles.textInput }
                  placeholder="Email"
                  placeholderTextColor={ Colors.steel }
                  underlineColorAndroid={ Colors.text }
                  numberOfLines={1}
                  onChangeText={(text) => this.setState({signupEmail: text})}
                />
                <TextInput
                  style={ styles.textInput }
                  placeholder="Password"
                  placeholderTextColor={ Colors.steel }
                  underlineColorAndroid={ Colors.text }
                  numberOfLines={1}
                  secureTextEntry={true}
                  onChangeText={(text) => this.setState({signupPassword1: text})}
                />

                <TextInput
                  style={ styles.textInput }
                  placeholder="Password confirm"
                  placeholderTextColor={ Colors.steel }
                  underlineColorAndroid={ Colors.text }
                  numberOfLines={1}
                  secureTextEntry={true}
                  onChangeText={(text) => this.setState({signupPassword2: text})}
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
                    onChangeText={(text) => this.setState({signupCode: text})}
                  />
                </View>

              </View>

              <TouchableOpacity style={ styles.authButton }
                onPress={ this._onSignupButtonClick }>
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
    loginRequest: (email, password) => {
      dispatch(AuthActions.loginRequest(email, password));
    },
    signupRequest: (email, password1, password2) => {
      dispatch(AuthActions.signupRequest(email, password1, password2));
    },
    goBack: () => {
      dispatch({ type: 'Navigation/BACK' });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen)
