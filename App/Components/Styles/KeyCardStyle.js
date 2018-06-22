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
    // justifyContent: 'space-around',
    alignItems: 'center', 
    // height: 50,
    // paddingVrBottom: Metrics.doubleBaseMargin,
    backgroundColor: Colors.snow,
    borderTopWidth: 1,
    borderTopColor: Colors.cloud,
  },

  openButton: {
    // backgroundColor: Colors.affirmative,
    // borderRadius: 40,
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.doubleBaseMargin,
    // margin: Metrics.baseMargin,
    width: '50%',
    // borderTopWidth: 1,
    // borderTopColor: Colors.cloud,
    // borderRightWidth: 1,
    // borderRightColor: Colors.cloud,
  }, 
  
  closeButton: {
    // backgroundColor: Colors.negative,
    // borderRadius: 40,
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.doubleBaseMargin,
    // margin: Metrics.baseMargin,
    width: '50%',
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
    color: Colors.affirmative
  },

  closeText: {
    ...Fonts.style.h5,
    textAlign: 'center',
    color: Colors.negative
  }

})
