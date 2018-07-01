import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  panelView: {
    // ...ApplicationStyles.shadow,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.snow,
    padding: Metrics.section,
    borderColor: Colors.shadow,
    borderWidth: 1,
    // marginHorizontal: Metrics.baseMargin,
    // alignSelf:'flex-end'
    // backgroundColor: 'red',
    // width: Metrics.screenWidth,
    // height: Metrics.screenHeight,
    // top: '80%'
  },

  dashboardTitle: {
    ...Fonts.style.h2,
    color: 'black',
  },

  dashboardTabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Metrics.doubleBaseMargin
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
