import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  imageBackground: {
    // width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    // flex: 1 
    backgroundColor: 'rgba(0,0,0,.6)',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
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
    borderRadius: 10,
    backgroundColor: Colors.hotPink,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
  },
  loginButtonText: {
    ...Fonts.style.h4, 
    color: Colors.snow,  
  },
  signupButtonText: {
    ...Fonts.style.h4,
  }
})
