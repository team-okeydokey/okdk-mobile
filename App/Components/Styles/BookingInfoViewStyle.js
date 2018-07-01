import { StyleSheet } from 'react-native'
import { Metrics, Fonts, Colors } from '../../Themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginVertical: Metrics.doubleBaseMargin
  },

  infoDisplay: {
    marginTop: Metrics.baseMargin
  },
  infoTitle: {
    ...Fonts.style.normal,
    paddingVertical: 5,
    color: Colors.charcoal
  }, 
  infoValue: {
    ...Fonts.style.description,
    color: Colors.frost
  },
  timeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
