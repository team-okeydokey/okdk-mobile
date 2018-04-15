import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics} from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: Metrics.baseMargin,
  },
  image: {
    // flex: 6,
    width: Dimensions.get('window').width,
    height:150,
    resizeMode: 'cover',
  }, 
  title: {

  }, 
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: Colors.searchBar
  },
  dotContainer: {
    marginTop: -50,
    backgroundColor: Colors.transparent
  }
})
