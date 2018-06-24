import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  imageBackground: {
    // width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    // flex: 1 
    backgroundColor: 'rgba(0,0,0,.2)',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Metrics.section,
    paddingBottom: Metrics.doubleSection
  },

  keyboardAvoidingView: {
    width: "100%",
    // flexDirection: 'column',
    // justifyContent: 'space-around',
    // alignItems: 'center',
  },

  slogan: {
    ...Fonts.style.h1,
    color: Colors.text
  },

  loginForm: {
    width: '100%',
    backgroundColor:'transparent',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  loginInput: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.snow,
    borderRadius: 10,
    paddingHorizontal: Metrics.doubleBaseMargin,
    paddingVertical: Metrics.baseMargin,
  },

  email: {
    width: "100%",
    ...Fonts.style.normal,
    color: Colors.charcoal,
  },

  password: {
    width: "100%",
    ...Fonts.style.normal,
    color: Colors.charcoal,
  },

  loginButton: {
    borderRadius: 10,
    backgroundColor: Colors.hotPink,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    marginTop: Metrics.doubleBaseMargin
  },
  loginButtonText: {
    ...Fonts.style.h4, 
    color: Colors.snow,  
  },
  signupButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButtonText: {
    ...Fonts.style.h4,
    color: Colors.snow
  }
})
