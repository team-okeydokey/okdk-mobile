import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  sectionList: {
  	paddingHorizontal: Metrics.baseMargin,
    paddingBottom: Metrics.section,
  },
  flatList: {
  	// padding: Metrics.section
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: Metrics.section,
    marginBottom: Metrics.section,
  },
  // searchBar: {
  // 	flexDirection: 'row',
  // 	justifyContent: 'flex-start',
  // 	alignItems: 'center',
  // 	padding: Metrics.baseMargin,
  // 	borderRadius: 10,
  // 	backgroundColor: Colors.searchBar,
  // 	marginHorizontal: Metrics.section,
  // },
  searchBarText: {
  	color: Colors.searchBarText,
    fontSize: Fonts.size.h6,
    fontFamily: Fonts.type.base,
    textAlign: 'left',
    paddingHorizontal: Metrics.baseMargin,
    marginHorizontal: Metrics.marginHorizontal
  },
  bannerHeader: {
    ...ApplicationStyles.screen.sectionHeader,
    marginHorizontal: Metrics.section
  },
})
