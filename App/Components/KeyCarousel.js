import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/KeyCarouselStyle'

import Carousel from 'react-native-snap-carousel';
import KeyCard from './KeyCard';

export default class KeyCarousel extends Component {
  // Prop type warnings
  static propTypes = {
    sliderWidth: PropTypes.number.isRequired,
    itemWidth: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
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
        title={item.title}
      />
    );
  }

  render() {
    return (
      <Carousel
        ref={(c) => { this._carousel = c; }}
        // data={this.state.entries}
        data={this.props.data}
        renderItem={this._renderItem}
        sliderWidth={this.props.sliderWidth}
        itemWidth={this.props.itemWidth}
        // containerCustomStyle={styles.slider}
        // contentContainerCustomStyle={styles.item}
        slideStyle={styles.slide}
      />
    );
  }
}
