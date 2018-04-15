import { StyleSheet } from 'react-native'
import { Metrics, Fonts, Colors, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginVertical: Metrics.marginVertical,
    marginHorizontal: Metrics.marginHorizontal,
    height: 250, 
    backgroundColor: Colors.snow,
    borderRadius: 10,
    ...ApplicationStyles.shadow,
  }, 
  imageContainer: {
    flex: 6,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  }, 
  title: {
    flex: 1,
    color: Colors.coal,
    fontWeight: 'bold',
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.emphasis,
    paddingHorizontal: Metrics.marginVertical,
    paddingVertical: 5,
    marginRight: 'auto' // Override justify content.
  }, 
  description: {
    flex: 2,
    color: Colors.charcoal,
    fontFamily: Fonts.type.base,
    paddingHorizontal: Metrics.marginVertical,
    marginVertical: 5,
    marginRight: 'auto' // Override justify content.
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  price: {
    flex: 2,
    color: Colors.textDarkPrimary,
    fontFamily: Fonts.type.emphasis,
    textAlign: 'right',
  },
  heartContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  heartCount: {
    flex: 1,
    marginLeft: 5,
    color: Colors.textDarkSecondary,
    fontFamily: Fonts.type.emphasis,
  },
})
