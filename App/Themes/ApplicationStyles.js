import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.transparent,
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.background
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin
    },
    sectionText: {
      ...Fonts.style.normal,
      paddingVertical: Metrics.doubleBaseMargin,
      color: Colors.snow,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center'
    },
    subtitle: {
      color: Colors.snow,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin
    },
    titleText: {
      ...Fonts.style.h2,
      fontSize: 14,
      color: Colors.text
    },
    screenHeader: {
      color: Colors.textDarkEmphasis,
      fontWeight: 'bold',
      fontSize: Fonts.size.h4,
      fontFamily: Fonts.type.bold,
      textAlign: 'left',
      marginHorizontal: Metrics.section,
      marginTop: Metrics.section,
      paddingLeft: Metrics.baseMargin,
      paddingRight: Metrics.baseMargin
    },
    screenDescription: {
      color: Colors.textDarkSecondary,
      fontWeight: 'bold',
      fontSize: Fonts.size.regular,
      fontFamily: Fonts.type.base,
      textAlign: 'left',
      marginHorizontal: Metrics.section,
      marginTop: Metrics.smallMargin,
      marginBottom: Metrics.section,
      paddingLeft: Metrics.baseMargin,
      paddingRight: Metrics.baseMargin
    },
    sectionHeader: {
      color: Colors.textDarkPrimary,
      fontWeight: 'bold',
      fontSize: Fonts.size.h5,
      fontFamily: Fonts.type.emphasis,
      textAlign: 'left',
      padding: Metrics.smallMargin,
      marginTop: Metrics.baseMargin,
    },

    cardHeader: {
      color: Colors.snow,
      fontWeight: 'bold',
      fontSize: Fonts.size.h5,
      fontFamily: Fonts.type.base,
      textAlign: 'left',
      padding: Metrics.smallMargin,
    },
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.ember,
    alignItems: 'center',
    textAlign: 'center'
  },
  shadow: {
    // Shadow
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
}

export default ApplicationStyles