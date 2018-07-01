import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Metrics } from '../Themes/'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import SlidingUpPanel from 'rn-sliding-up-panel';

// Styles
import styles from './Styles/DashboardStyle'

export default class DashBoardScreen extends Component {

  // Prop type warnings
  static propTypes = {
    active: PropTypes.bool.isRequired,
    onHeaderPress: PropTypes.func.isRequired,
  }

  render () {
    return (
      <SlidingUpPanel
        visible={this.props.active}
        startCollaped
        showBackdrop={false}
        allowMomentum={false}
        draggableRange={{
          "top": Metrics.screenHeight,
          "bottom": 120
        }}>
        <View style={styles.panelView}>
          <TouchableOpacity 
            onPress={this.props.onHeaderPress}>
            <Text style={styles.dashboardTitle}>Dashboard</Text>
          </TouchableOpacity>
        </View>
      </SlidingUpPanel>
    )
  }
}