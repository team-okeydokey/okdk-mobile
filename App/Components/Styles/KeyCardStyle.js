import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1
  }, 

  keyCardButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  openButton: {
    backgroundColor: Colors.affirmative,
    borderRadius: 40,
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.smallMargin,
    marginRight: Metrics.baseMargin,
    ...ApplicationStyles.shadow,
  }, 
  
  closeButton: {
    backgroundColor: Colors.negative,
    borderRadius: 40,
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.smallMargin,
    marginLeft: Metrics.baseMargin,
    ...ApplicationStyles.shadow,
  },

  openText: {
    ...Fonts.style.h5,
    color: Colors.snow
  },

  closeText: {
    ...Fonts.style.h5,
    color: Colors.snow
  }

})
