import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  imageBackground: {
    // width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    // flex: 1 
  },
  imageBackgroundDim: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    backgroundColor: Colors.coal,
    opacity: 0.1,
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

  },
  signupButtonText: {
    // borderBottomWidth: 1 
  }
})
