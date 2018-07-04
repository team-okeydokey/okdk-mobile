import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  panelView: {
    // ...ApplicationStyles.shadow,
    // overflow:'visible',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.snow,
    padding: Metrics.section,
    borderColor: Colors.shadow,
    borderWidth: 1,
    marginHorizontal: Metrics.baseMargin,
    // alignSelf:'flex-end'
    // backgroundColor: 'red',
    // width: Metrics.screenWidth,
    height: Metrics.screenHeight * 0.9,
    // top: '80%'
  },

  dashboardHeaderContainer: {
    height: Metrics.screenHeight * 0.1,
  },

  dashboardHeader: {
    ...Fonts.style.h2,
    color: 'black',
  },

  dashboardContent: {
    height: Metrics.screenHeight * 0.6 - 2 * Metrics.doubleBaseMargin,
    // backgroundColor: 'red'
  },

  dashboardTabContainer: {
    height: Metrics.screenHeight * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: Metrics.doubleBaseMargin
  },

  dashboardTabButton: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  dashboardTabButtonIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },

  dashboardTabButtonImage: {

  },

  dashboardTabButtonLabel: {
    fontSize: 10
  }
})
