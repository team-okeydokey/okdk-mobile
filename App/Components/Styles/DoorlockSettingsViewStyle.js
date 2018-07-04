import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    // marginVertical: Metrics.doubleBaseMargin,
  },

  passcodeChangeForm: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },

  sectionTitle: {
    ...Fonts.style.normal,
    textAlign: 'left',
    marginVertical: Metrics.doubleBaseMargin
  },

  textInput: {
    width: "100%",
    ...Fonts.style.normal,
    color: Colors.charcoal,
  },

  changePasscodeButton: {
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: Colors.hotPink,
    marginVertical: Metrics.doubleBaseMargin,
  },

  changePasscodeButtonText: {
    ...Fonts.style.normal,
    color: Colors.snow,
    paddingVertical: 5,
    paddingHorizontal: Metrics.baseMargin,
  }
})
