import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  imageContainer: {
  	flex: 5,
  	justifyContent: 'center',
  	alignItems: 'center',
  	padding: Metrics.baseMargin,
  	margin: Metrics.sectionMargin,
    overflow: 'hidden',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    resizeMode: 'cover',
  }, 
  deviceInfoContainer: {
  	flex: 3,
  	justifyContent: 'center',
  	alignItems: 'flex-start',
  	paddingHorizontal: Metrics.doubleBaseMargin,
  	marginHorizontal: Metrics.sectionMargin,
  	marginVertical: 15,
  },
  deviceInfoItem: {
  	flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  deviceInfoName: {
  	color: Colors.coal,
    fontWeight: 'bold',
    fontSize: Fonts.size.h3,
    fontFamily: Fonts.type.emphasis,
    paddingHorizontal: Metrics.marginVertical,
    paddingVertical: 5,
    marginRight: 'auto' // Override justify content.
  },
  deviceInfoLabel: {
  	color: Colors.coal,
    fontWeight: 'bold',
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.emphasis,
    paddingHorizontal: Metrics.marginVertical,
    paddingVertical: 5,
    marginRight: 'auto' // Override justify content.
  },
  deviceInfoValue: {
    color: Colors.charcoal,
    fontFamily: Fonts.type.base,
    paddingHorizontal: Metrics.marginVertical,
    paddingVertical: 5,
    marginRight: 'auto', // Override justify content.
    textAlign: 'left'
  },
  buttonsContainer: {
  	flex: 2,
    marginBottom: Metrics.doubleSection
  },
})
