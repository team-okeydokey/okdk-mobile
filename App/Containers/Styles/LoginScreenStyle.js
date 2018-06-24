import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  imageBackground: {
    // width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    // flex: 1 
    backgroundColor: 'rgba(0,0,0,.6)'
  },
  loginForm: {
    backgroundColor:'transparent'
  },
  email: {
    // borderBottomWidth: 1
  },
  password: {
    // borderBottomWidth: 1 
  },
  loginButton: {

  },
  loginButtonText: {
    ...Fonts.style.h4,    
  },
  signupButtonText: {
    ...Fonts.style.h4,
  }
})
