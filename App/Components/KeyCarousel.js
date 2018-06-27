import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/KeyCarouselStyle'

import Carousel, { Pagination } from 'react-native-snap-carousel';
import KeyCard from './KeyCard';

export default class KeyCarousel extends Component {
  // Prop type warnings
  static propTypes = {
    sliderWidth: PropTypes.number.isRequired,
    itemWidth: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
    onSnapToItem: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    activeSlide: PropTypes.number.isRequired,
  }
  
  // Defaults for props
  static defaultProps = {
    // sliderWidth: 0,
    // itemWidth: 0,
    // entries: [],
  }

  _renderItem({item, index}) {
    return (
      <KeyCard
        name={item.accessName}
      />
    );
  }

  _pagination() {

    let length = this.props.active ? this.props.data.length : 0;

    return (
        <Pagination
          dotsLength={length}
          activeDotIndex={this.props.activeSlide}
          containerStyle={styles.containerStyle}
          dotStyle={styles.dotStyle}
          inactiveDotStyle={styles.inactiveDotStyle}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
    );
  }

  render() {

    let pagination = this._pagination();

    return (
      <View>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          // data={this.state.entries}
          data={this.props.data}
          renderItem={this._renderItem}
          sliderWidth={this.props.sliderWidth}
          itemWidth={this.props.itemWidth}
          containerCustomStyle={styles.slider}
          // contentContainerCustomStyle={styles.item}
          slideStyle={styles.slide}
          onSnapToItem={(index) => this.props.onSnapToItem(index)}
        />
        {pagination}
      </View>
    );
  }
}
