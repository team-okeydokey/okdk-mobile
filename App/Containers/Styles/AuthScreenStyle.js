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
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: Metrics.section,
    paddingBottom: Metrics.doubleSection,
  },

  keyboardAvoidingView: {
    width: "100%",
    flex: 5,
    // flexDirection: 'column',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    
  },

  slogan: {
    ...Fonts.style.h1,
    color: Colors.snow,
    paddingHorizontal: Metrics.section,
  },

  authCarousel: {
    flex: 1,
    // width: '200%',
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // marginRight: 'auto',
  },

  loginPanel: {
    width: Metrics.screenWidth,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Metrics.section,
    paddingTop: Metrics.doubleSection,
    paddingBottom: Metrics.section,
  },

  signupPanel: {
    width: Metrics.screenWidth,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Metrics.section,
    paddingTop: Metrics.doubleSection,
    paddingBottom: Metrics.section,
  },

  inputForm: {
    width: '100%',
    backgroundColor:'transparent',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  loginFiller: {
    flex: 2,
  },

  signupFiller: {
    flex: 0.5,
  },

  inputGroup: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.snow,
    borderRadius: 10,
    paddingHorizontal: Metrics.doubleBaseMargin,
    paddingVertical: Metrics.baseMargin,
  },

  textInput: {
    width: "100%",
    ...Fonts.style.normal,
    color: Colors.charcoal,
  },

  authButton: {
    borderRadius: 10,
    backgroundColor: Colors.hotPink,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    marginTop: Metrics.doubleBaseMargin
  },

  authButtonText: {
    ...Fonts.style.h4, 
    color: Colors.snow,  
  },

  authAlternateButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  authAlternateButtonText: {
    ...Fonts.style.h4,
    color: Colors.snow
  }
})
