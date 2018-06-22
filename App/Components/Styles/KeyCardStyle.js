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
    borderRadius: 10,
    overflow: 'hidden'
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
    justifyContent: 'space-around',
    alignItems: 'center', 
    paddingBottom: Metrics.doubleBaseMargin,
    backgroundColor: Colors.snow,
    // borderTopWidth: 1,
    // borderTopColor: Colors.cloud,
  },

  openButton: {
    ...ApplicationStyles.shadow,
    backgroundColor: 'black',
    // borderRadius: 40,
    padding: Metrics.baseMargin,
    // margin: Metrics.baseMargin,
    width: '30%',
  }, 
  
  closeButton: {
    ...ApplicationStyles.shadow,
    backgroundColor: 'black',
    padding: Metrics.baseMargin,
    // margin: Metrics.baseMargin,
    width: '30%',
    // borderTopColor: Colors.cloud,
  },

  divider: {
    borderWidth: 1,
    borderColor:Colors.cloud,
    height: '100%'
  },

  openText: {
    ...Fonts.style.h5,
    textAlign: 'center',
    // color: Colors.affirmative
    color: Colors.snow
  },

  closeText: {
    ...Fonts.style.h5,
    textAlign: 'center',
    // color: Colors.negative
    color: Colors.snow
  }

})
