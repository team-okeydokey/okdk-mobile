import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.shadow,
    overflow:'visible',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },

  staffInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },

  staffType: {
    ...Fonts.style.h5,
  },

  staffName: {

  },

  timestamp: {
    ...Fonts.style.normal,
  }
})
