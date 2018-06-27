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
    padding: Metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderWidth: 6,
    // borderRadius: 50
  }, 
  
  closeButton: {
    ...ApplicationStyles.shadow,
    padding: Metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderWidth: 6,
    borderRadius: 50
  },

  openText: {
    ...Fonts.style.h5,
    textAlign: 'center',
    // color: Colors.affirmative
    color: 'black'
  },

  closeText: {
    ...Fonts.style.h5,
    textAlign: 'center',
    // color: Colors.negative
    color: 'black'
  }
})
