import React, { Component } from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel';
// import PropTypes from 'prop-types';
import { View, Text, Image, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import BannerActions from '../Redux/BannerRedux'
import { Images } from '../Themes'
import styles from './Styles/BannerStyle'

class Banner extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  _renderItem = ({item, index}) => {

      var bannerImage;

      switch(index) {
        case 0:
        case 5:
          bannerImage = Images.banner1;
          break;
        case 1:
        case 6:
          bannerImage = Images.banner2;
          break;
        case 2:
        case 7:
          bannerImage = Images.banner3;
          break;
        case 3:
        case 8:
          bannerImage = Images.banner2;
          break;
        case 4:
        case 9:
          bannerImage = Images.banner2;
          break;
        default:
          bannerImage = Images.banner2;
          break;
      }

      return (
          <View style={styles.slide}>
              <Image
                source={bannerImage}
                style={styles.image}
                resizeMode={Image.resizeMode.cover}
              />
          </View>
      );
  }

  get pagination () {
    return (
      <Pagination
        // dotsLength={this.props.bannerEntries.length}
        dotsLength={5}
        activeDotIndex={this.props.activeSlide}
        containerStyle={styles.dotContainer}
        dotStyle={styles.dot}
        inactiveDotStyle={{
            // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  render () {
    return (
        <View>
            <Carousel
              layout={'default'}
              // data={ this.props.bannerEntries }
              data={ [{'title': 'OkeyDokey'}, {'title': 'OkeyDokey'}, {'title': 'OkeyDokey'}, {'title': 'OkeyDokey'}, {'title': 'OkeyDokey'}]}
              renderItem={item => this._renderItem(item)}
              onSnapToItem={(index) => this.props.rotate(index) }
              sliderWidth={Dimensions.get('window').width}
              itemWidth={Dimensions.get('window').width}
              loop={true}
              autoplay={true}
              lockScrollWhileSnapping={true}
              autoplayInterval={5000}
            />
            { this.pagination }
        </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bannerEntries: state.banner.bannerEntries,
    activeSlide: state.banner.activeSlide
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    rotate: index => {
      dispatch(BannerActions.rotate(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner)
