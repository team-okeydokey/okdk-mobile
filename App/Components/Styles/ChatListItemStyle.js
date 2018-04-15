import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Metrics.baseMargin,
    marginHorizontal: 5,
    backgroundColor: Colors.snow,
  },
  chatContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  chatTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: Metrics.marginHorizontal
  },
  chatName: {
    color: Colors.textDarkEmphasis,
    fontSize: Fonts.size.h6,
    fontFamily: Fonts.type.base,
    textAlign: 'left',
    paddingHorizontal: Metrics.baseMargin,
  },
  latest: {
    ...Fonts.style.description,
    color: Colors.textDarkSecondary,
    textAlign: 'left',
    paddingHorizontal: Metrics.baseMargin,
  },
  date: {
    ...Fonts.style.description,
    color: Colors.textDarkSecondary,
    textAlign: 'left',
    paddingHorizontal: Metrics.baseMargin,
  },
  gradient: {
    padding: 20,
    width: 25,
    height: 25,
    borderRadius: 25,
    ...ApplicationStyles.shadow
  }
})
