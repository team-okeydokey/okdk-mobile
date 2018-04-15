import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Metrics.baseMargin,
    marginVertical: Metrics.smallMargin,
    marginHorizontal: 5,
    backgroundColor: Colors.snow,
    borderRadius: 10,
    ...ApplicationStyles.shadow
  },
  deviceInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: Metrics.marginHorizontal
  },
  deviceImage: {

  },
  deviceTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: Metrics.marginHorizontal
  },
  deviceName: {
    color: Colors.textDarkEmphasis,
    fontSize: Fonts.size.h6,
    fontFamily: Fonts.type.base,
    textAlign: 'left',
    paddingHorizontal: Metrics.baseMargin,
  },
  deviceDescription: {
    ...Fonts.style.description,
    color: Colors.textDarkSecondary,
    textAlign: 'left',
    paddingHorizontal: Metrics.baseMargin,
  },
  deviceAction: {

  },
  gradient: {
    padding: 20,
    width: 25,
    height: 25,
    borderRadius: 25,
    ...ApplicationStyles.shadow
  }
})
