import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/DoorActivityViewStyle'
import Activity from './Activity'

class DoorActivityView extends Component {
  // Prop type warnings
  static propTypes = {
    activityData: PropTypes.array.isRequired,
  }
  
  // Defaults for props
  static defaultProps = {
    activityData: []
  }

  _renderItem = ({item}) => (
    <Activity
      type={item.type}
      description={item.description}
      timestamp={item.timestamp}
    />
  );

  _renderSeparator() {
    return (
      <View style={{'height':10}}></View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatlist}
          data={this.props.activityData}
          renderItem={this._renderItem}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={this._renderSeparator}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoorActivityView)
