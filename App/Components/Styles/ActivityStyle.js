import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    // ...ApplicationStyles.shadow,
    // overflow:'visible',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    marginVertical: 10,
    // marginHorizontal: 10,
    borderRadius: 10,
    borderColor: Colors.shadow,
    borderWidth: 1, 
  },

  staffInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginHorizontal: 10
  },

  guestInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },

  activity: {
    width: 90, 
    fontSize: 15,
    fontWeight: "bold"
  },

  staffType: {
    fontWeight: "bold"
  },

  staffName: {
    color: 'gray'
  },

  timestamp: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.small
  },

  guestName: {
    color: 'gray'
  },
})
