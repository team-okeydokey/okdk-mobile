import { StyleSheet } from 'react-native'
import { Colors, ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  slider: {
    // backgroundColor: Colors.white,
    flexGrow: 0
  },

  slide: {
    padding: Metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerStyle: {
    backgroundColor: Colors.snow,
    // padding: 0
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
    backgroundColor: 'black'
  }, 
  inactiveDotStyle: {

  },
})
