import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1
  }, 

  keyCard: {
    backgroundColor: Colors.snow,
    borderWidth: 8,
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
    textAlign: 'center',
    marginTop: 30
  },

  keyCardInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Metrics.doubleBaseMargin,
  },

  keyCardName: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
    textAlign: 'center',
  },

  passcodeLabel: {
    marginTop: 30,
    marginBottom: 5,
    fontWeight: "bold"
  },

  passcodeValue: {
    fontWeight: "bold"
  },

  doNotDisturbButton: {
    marginTop: 30,  
  },

  doNotDisturbButtonText: {
    fontWeight: "bold"
  }
})
