import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/KeyCarouselStyle'

import Carousel, { Pagination } from 'react-native-snap-carousel';
import KeyCard from './KeyCard';
import InactiveKeyCard from './KeyCard';

export default class KeyCarousel extends Component {

  constructor(props) {
    super(props);
    
    this._renderItem = this._renderItem.bind(this); 
    this._calculatePasscode = this._calculatePasscode.bind(this);  
  }

  // Prop type warnings
  static propTypes = {
    active: PropTypes.bool.isRequired,
    sliderWidth: PropTypes.number.isRequired,
    itemWidth: PropTypes.number.isRequired,
    itemHeight: PropTypes.number.isRequired,
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

  _calculatePasscode() {
    if (this.props.active) {
      return "123123"
    } else {
      return ""
    }
  }

  _renderItem({item, index}) {
    return (
      <KeyCard
        active={this.props.active}
        name={item.accessName}
        passcode={this._calculatePasscode()}
        width={this.props.itemWidth}
        height={this.props.itemHeight}
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
      <View style={{"marginTop": 20}}>
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
