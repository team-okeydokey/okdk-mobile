import { StyleSheet } from 'react-native'
import { Metrics, Fonts, Colors, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  sloganText: {
    color: Colors.snow,
    fontWeight: 'bold',
    fontSize: Fonts.size.h2,
    fontFamily: Fonts.type.emphasis,
    textAlign: 'center'
  },
  authTextNormal: {
    ...Fonts.style.normal,
    color: Colors.snow,
    marginVertical: Metrics.smallMargin,
    textAlign: 'center',
  },
  authTextUnderline: {
    ...Fonts.style.normal,
    paddingVertical: Metrics.smallMargin,
    color: Colors.snow,
    marginVertical: Metrics.smallMargin,
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  licenseText: {
    ...Fonts.style.normal,
    paddingVertical: Metrics.smallMargin,
    color: Colors.snow,
    marginVertical: Metrics.smallMargin,
    textAlign: 'center',
    textAlign: 'center'  
  }
})
