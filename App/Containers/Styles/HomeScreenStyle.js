import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  sectionTitle: {
    ...Fonts.style.h2,
    margin: Metrics.doubleBaseMargin,
    color:'black', 
  }, 
  screenHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  profileIcon: {
    marginHorizontal: Metrics.doubleBaseMargin
  }
})
