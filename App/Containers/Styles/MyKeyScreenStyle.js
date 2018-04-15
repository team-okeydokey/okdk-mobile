import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  centered: {
    alignItems: 'center'
  },
  sectionList: {
  	paddingHorizontal: Metrics.baseMargin,
  	paddingBottom: Metrics.section
  },
})
