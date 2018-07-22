import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1
  }, 

  keyCard: {
    backgroundColor: Colors.snow,
    borderWidth: 6,
    overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // keyCardFrame: {
  //   width: 280,
  //   height: 280,

  // },

  myKeyTitle: {
    ...Fonts.style.description,
    color: Colors.text,
    marginBottom: Metrics.doubleBaseMargin,
    textAlign: 'center'
  },

  keyCardInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Metrics.doubleBaseMargin,
  },

  keyCardName: {
    ...Fonts.style.h5,
    color: 'black',
    textAlign: 'center',
  },

  passcodeLabel: {
    marginTop: 20,
    marginBottom: 5
  },

  passcodeValue: {
  
  },

  shareButton: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  shareButtonText: {
    color: Colors.appleBlue
  }
})
