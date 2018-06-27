import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    paddingTop: Metrics.baseMargin,
    backgroundColor: Colors.background,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  date: {
    ...Fonts.style.description,
    marginHorizontal: Metrics.doubleBaseMargin
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
    padding: Metrics.doubleBaseMargin,
    marginTop: 30
    // borderTopWidth: 1,
    // borderTopColor: Colors.cloud,
  },

  actionButton: {
    padding: Metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderWidth: 6,
    borderRadius: 50
  }, 
  
  actionButtonText: {
    ...Fonts.style.normal,
    textAlign: 'center',
    // color: Colors.affirmative
    color: 'black'
  },

  // closeText: {
  //   ...Fonts.style.h5,
  //   textAlign: 'center',
  //   // color: Colors.negative
  //   color: 'black'
  // }
})
