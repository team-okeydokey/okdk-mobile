import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import { Images, Colors } from '../Themes/'
import styles from './Styles/DiscoverItemStyle'

import { Icon } from 'react-native-elements'

export default class DiscoverItem extends Component {
  static propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    hearts: PropTypes.string
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={Images.device1}
            style={styles.image}
            resizeMode={Image.resizeMode.cover}
          />
        </View>
        <Text numberOfLines={1} style={styles.title}>{this.props.title}</Text>
        <Text numberOfLines={2} style={styles.description}>{this.props.description}</Text>
        <View style={styles.footer}>
          <View style={styles.heartContainer}>
            <Icon type={'foundation'} name={'heart'} size={20} color={Colors.heart}/>
            <Text numberOfLines={1} style={styles.heartCount}>{this.props.hearts}</Text>
          </View>
          <Text numberOfLines={1} style={styles.price}>{this.props.price}</Text>
        </View>
      </View>
    );
  }
}