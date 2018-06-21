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

  keyCardImage: {
    height: 120,
    backgroundColor: Colors.sand
  },

  keyCardInfo: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'flex-start', 
    height: 70,
    padding: Metrics.baseMargin
  },

  keyCardTitle: {
    ...Fonts.style.h4,
  },

  keyCardButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
    height: 50,
    padding: Metrics.baseMargin,
    paddingVertical: Metrics.doubleBaseMargin,
    backgroundColor: Colors.aliceBlue
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
