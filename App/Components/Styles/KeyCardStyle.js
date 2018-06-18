import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1
  }, 

  keyCard: {
    // ...ApplicationStyles.shadow,
    backgroundColor: Colors.snow,
  },

  keyCardInfo: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'flex-start', 
    padding: Metrics.baseMargin
  },

  keyCardTitle: {
    ...Fonts.style.h4,
  },

  keyCardButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
    padding: Metrics.baseMargin
  },

  openButton: {
    ...ApplicationStyles.shadow,
    backgroundColor: Colors.affirmative,
    borderRadius: 40,
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.smallMargin,
    marginRight: Metrics.baseMargin,
  }, 
  
  closeButton: {
    ...ApplicationStyles.shadow,
    backgroundColor: Colors.negative,
    borderRadius: 40,
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.smallMargin,
    marginLeft: Metrics.baseMargin,
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
