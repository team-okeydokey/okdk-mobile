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
    // marginTop: Metrics.baseMargin
    // borderTopWidth: 1,
    // backgroundColor: Colors.cloud,
  },

  actionButton: {
    padding: Metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 8,
  }, 
  
  actionButtonText: {
    ...Fonts.style.normal,
    textAlign: 'center',
    // color: Colors.affirmative
    color: 'black'
  },

  shareButton: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  shareButtonText: {
    color: Colors.appleBlue,
    fontWeight: 'bold',
  },

  profileText: {
    fontWeight: 'bold',
  }

  // closeText: {
  //   ...Fonts.style.h5,
  //   textAlign: 'center',
  //   // color: Colors.negative
  //   color: 'black'
  // }
})
