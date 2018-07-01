import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Metrics } from '../Themes/'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
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
    headerHeight: PropTypes.number.isRequired,
  }

  render () {

    // const dashboardHeaderStyle = {
    //   "height": headerHeight,
    // }

    return (
      <SlidingUpPanel
        visible={this.props.active}
        startCollaped
        showBackdrop={false}
        allowMomentum={false}
        draggableRange={{
          "top": Metrics.screenHeight,
          "bottom": this.props.headerHeight
        }}>
        <View style={styles.panelView}>
          <TouchableOpacity 
            onPress={this.props.onHeaderPress}>
            <Text style={styles.dashboardHeader}>
              Dashboard
            </Text>
          </TouchableOpacity>
          <View style={styles.dashboardTabContainer}>
            <TouchableOpacity style={styles.dashboardTabButton}> 
              <View style={styles.dashboardTabButtonIcon}> 
                <Icon name="list" size={30} color="#2d2d2d"/>
              </View>
              <Text numberOfLines={1}>Booking Info</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dashboardTabButton}>
              <View style={styles.dashboardTabButtonIcon}> 
                <Icon name="key" size={30} color="#2d2d2d"/>
              </View>
              <Text numberOfLines={1}>Doorlock Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dashboardTabButton}> 
              <View style={styles.dashboardTabButtonIcon}> 
                <Icon name="bell" size={30} color="#2d2d2d"/>
              </View>
              <Text numberOfLines={1}>Door Activity</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SlidingUpPanel>
    )
  }
}