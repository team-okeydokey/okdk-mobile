import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1
  }, 

  keyCard: {
    backgroundColor: Colors.snow,
    height: 280,
    // borderRadius: 100,
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Metrics.doubleBaseMargin,
  },

  keyCardTitle: {
    ...Fonts.style.h5,
    color: 'black',
    textAlign: 'center',
  },
})
