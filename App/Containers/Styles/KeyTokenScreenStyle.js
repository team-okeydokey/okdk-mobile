import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  centered: {
    alignItems: 'center',
    // marginTop: -20
  },
  tokenSection: {
    marginTop: Metrics.doubleBaseMargin,
    marginBottom: Metrics.smallMargin
  },
  cardSection: {
    backgroundColor: Colors.snow,
    marginHorizontal: Metrics.section,
    marginTop: Metrics.baseMargin,
    borderRadius: 20,
    ...ApplicationStyles.shadow,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Metrics.baseMargin,
    paddingVertical: 5,
  },
  tokenValueContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: Metrics.smallMargin
  },
  tokenValue: {
    color: Colors.facebook,
    fontSize: Fonts.size.h2,
    fontFamily: Fonts.type.bold,
    textAlign: 'center',
    paddingHorizontal: Metrics.baseMargin,
  },
  tokenDelta: {
    color: Colors.pastelGreen,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.bold,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Metrics.doubleBaseMargin,
  },
  chartRangeButton: {
    backgroundColor: Colors.snow,
    borderRadius: 10,
    marginHorizontal: Metrics.smallMargin,
  },
  chartRangeButtonSelected: {
    backgroundColor: '#c4d6ee',
    borderRadius: 10,
    marginHorizontal: Metrics.smallMargin,
  },
  chartRangeButtonText: {
    color: Colors.textDarkPrimary,
    fontWeight: 'bold',
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.base,
    textAlign: 'center',
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: 5,
  },
  walletItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.baseMargin,
  },
  walletItemTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  walletItemImage: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  walletItemText: {
    color: Colors.snow,
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.base,
    textAlign: 'center',
    paddingHorizontal: Metrics.baseMargin,
  },
  walletItemValueContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: Metrics.baseMargin,
  },
  walletItemValue: {
    color: Colors.snow,
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.emphasis,
    textAlign: 'right',
    marginHorizontal: Metrics.baseMargin,
  },
  walletItemValueUnit: {
    color: Colors.snow,
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.base,
    textAlign: 'right',
  }, 
  gradient: {
    padding: 20,
    borderRadius: 20,
  },
  tokenValueGradient: {
    borderRadius: 10,
  },
  tokenButtonContainer: {
    backgroundColor: Colors.snow,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: Metrics.baseMargin,
    paddingBottom: Metrics.section,
    paddingVertical: Metrics.baseMargin,
  },
  tokenButton: {
    borderRadius: 10,
    backgroundColor: Colors.facebook 
  },
  tokenButtonText: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: Colors.snow,
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.base,
  },
  tokenButtonTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  }
})

export const dataStyle = {
	data: { fill: Colors.chartFill, fillOpacity: 0.7, 
          stroke: Colors.chartStroke, strokeWidth: 3},
    // parent: { border: "1px solid #ccc"},
}

export const xAxisStyle = {
	axis: {stroke: Colors.textDarkPrimary},
	grid: {stroke:"none"},
    ticks: {stroke: Colors.textDarkPrimary, padding:2},
    tickLabels: {fontSize: 12, stroke:Colors.textDarkPrimary}
}

export const yAxisStyle = {
	axis: {stroke: Colors.textDarkPrimary},
	grid: {stroke:"none"},
    ticks: {stroke: Colors.textDarkPrimary, padding:2},
    tickLabels: {fontSize: 12, stroke:Colors.textDarkPrimary}
}