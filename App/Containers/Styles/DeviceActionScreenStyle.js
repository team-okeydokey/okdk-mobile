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
  	padding: Metrics.baseMargin,
  	marginHorizontal: Metrics.sectionMargin,
  	marginVertical: 30,
  },
  inline: {
  	flexDirection: 'row',
  },
  deviceInfoName: {
  	color: Colors.coal,
    fontWeight: 'bold',
    fontSize: Fonts.size.h5,
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
    marginVertical: 5,
    marginRight: 'auto' // Override justify content.
  },
  buttonsContainer: {
  	flex: 2,
  },
})
