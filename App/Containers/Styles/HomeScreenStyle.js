import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  date: {
    ...Fonts.style.description,
  },
  sectionTitle: {
    ...Fonts.style.h4,
    margin: Metrics.doubleBaseMargin,
    color:'black', 
  }, 
  screenHeader: {
    marginVertical: Metrics.doubleBaseMargin,
    marginHorizontal: Metrics.doubleBaseMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  profileIcon: {
    marginHorizontal: Metrics.doubleBaseMargin
  },

  buttonContainer: {
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
