import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.shadow,
    overflow:'visible',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    borderRadius: 10,
  },

  description: {
    ...Fonts.style.h5,
    alignSelf: 'flex-start',
  },

  timestamp: {
    ...Fonts.style.normal,
    alignSelf: 'flex-end',
  }
})
