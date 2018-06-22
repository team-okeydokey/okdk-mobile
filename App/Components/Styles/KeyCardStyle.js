import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1
  }, 

  keyCard: {
    ...ApplicationStyles.shadow,
    backgroundColor: Colors.snow,
    margin: Metrics.baseMargin,
  },

  keyCardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Metrics.doubleBaseMargin
  },

  keyCardImageContainer: {
    backgroundColor: Colors.snow,
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
  },

  keyCardInfo: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'flex-start', 
    width:150,
  },

  keyCardTitle: {
    ...Fonts.style.h4,
  },

  keyCardDescription: {
    ...Fonts.style.description,
  },

  keyCardButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
    height: 50,
    padding: Metrics.baseMargin,
    marginBottom: Metrics.doubleBaseMargin,
    backgroundColor: Colors.snow
  },

  openButton: {
    ...ApplicationStyles.shadow,
    backgroundColor: Colors.affirmative,
    borderRadius: 40,
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.smallMargin,
    margin: Metrics.baseMargin,
  }, 
  
  closeButton: {
    ...ApplicationStyles.shadow,
    backgroundColor: Colors.negative,
    borderRadius: 40,
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.smallMargin,
    margin: Metrics.baseMargin,
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
