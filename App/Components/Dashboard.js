import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Metrics } from '../Themes/'
import { EvilIcons } from '@expo/vector-icons';
import { Colors } from '../Themes/'

import DashboardActions, { getTabNameByIndex } from '../Redux/DashboardRedux'

import SlidingUpPanel from 'rn-sliding-up-panel';
import BookingInfoView from '../Components/BookingInfoView'
import DoorlockSettingsView from '../Components/DoorlockSettingsView'
import DoorActivityView from '../Components/DoorActivityView'

// Styles
import styles from './Styles/DashboardStyle'

class DashBoard extends Component {

  // Prop type warnings
  static propTypes = {
    headerHeight: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);

    this._getDashboardContent = this._getDashboardContent.bind(this);
    this._tabBarButton = this._tabBarButton.bind(this);
    this._tabButtonIconStyle = this._tabButtonIconStyle.bind(this);
    this._getTabColor = this._getTabColor.bind(this);
    this._toggleDashboard = this._toggleDashboard.bind(this);
  }

  componentDidMount() {
    this.panel.transitionTo(0, 1);
    this.props._setDashboardState(false);
  }

  _toggleDashboard() {
    if (this.props.dashboardOpen) {
      this.panel.transitionTo(0);
    } else {
      this.panel.transitionTo(Metrics.screenHeight * 0.8);
    }
    this.props._setDashboardState(!this.props.dashboardOpen);
  }

  _getDashboardContent() {

    data=[{type: 0, description: 'Housekeeping', timestamp: 0}, {type: 1, description: 'Failed attempt', timestamp: 0},
    {type: 0, description: 'John opened door', timestamp: 0}, {type: 1, description: 'Failed attempt', timestamp: 0}, 
    {type: 1, description: 'Failed attempt', timestamp: 0}, {type: 0, description: 'test1', timestamp: 0},
    {type: 0, description: 'test1', timestamp: 0}]

    return (<DoorActivityView activityData={data}/>);

    // switch(this.props.currentTab) {
    // case 1: return (<DoorlockSettingsView/>);
    // case 2: return (<DoorActivityView activityData={data}/>);
    // case 0:
    // default:
    //     return (
    //     <BookingInfoView
    //       bookingNumber={"DSKDJNSK"} 
    //       checkIn={"2017-07-10"}
    //       checkOut={"2017-07-31"}
    //       hotelName={"Hello hotel"} 
    //       address={"5000 Forbes Avenue, Pittsburgh, PA 15213"}
    //       roomType={"Sunset Compact"}
    //       roomNumber={"201"}
    //     />);
    // }
  }


  _tabBarButton(index) {
    return (            
      <TouchableOpacity style={styles.dashboardTabButton} 
        onPressIn={() => this.props._selectTab(index)}> 
        <View style={[styles.dashboardTabButtonIcon, this._tabButtonIconStyle(index)]}> 
          <Icon name={this._tabButtonIconName(index)} size={30} color={this._getTabColor(index)}/>
        </View>
        <Text numberOfLines={1}
          style={{color: this._getTabColor(index)}}>{getTabNameByIndex(index)}</Text>
      </TouchableOpacity>
    )
  }

  _tabButtonIconName(index) {
    
    switch(index) {
      case 0: return "list";
      case 1: return "key";
      case 2: return "bell";
      default: return "list";
    }
  }

  _tabButtonIconStyle(index) {
    
    return {
      // If index of tab is the same as currentTab, 
      // set it to the highlight color.
      borderColor: (index == this.props.currentTab) ? Colors.facebook : 'black'
    }
  }

  _getTabColor(index) {
    return (index == this.props.currentTab) ? Colors.facebook : 'black'
  }

  render () {

    let dashboardContentView = this._getDashboardContent();

    return (

      <SlidingUpPanel
        ref={ref => this.panel = ref}
        visible={true}
        startCollaped
        showBackdrop={false}
        allowMomentum={true}
        allowDragging={false}
        draggableRange={{
          "top": Metrics.screenHeight - Metrics.screenHeight * 0.2,
          "bottom": this.props.headerHeight + 10
        }}
        >
        <View style={styles.panelView}>
          <TouchableOpacity
            style={styles.dashboardHeaderContainer}
            onPress={this._toggleDashboard}
            >
            <EvilIcons name="chevron-up" size={30} color="gray" />
            <Text style={styles.dashboardHeader}>
              {this.props.title}
            </Text>
          </TouchableOpacity>

          <View style={styles.dashboardContent}>

            {dashboardContentView}

          </View>

          {/* <View style={styles.dashboardTabContainer}>
            { this._tabBarButton(0) }

            { this._tabBarButton(1) }

            { this._tabBarButton(2) }
          </View> */}
        </View>
      </SlidingUpPanel>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dashboardOpen: state.dashboard.isOpen,
    title: state.dashboard.title,
    currentTab: state.dashboard.currentTab
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    _selectTab: (index) => {
      dispatch(DashboardActions.selectTab(index));
    },
    _setDashboardState: (isOpen) => {
      if (isOpen) {
        dispatch(DashboardActions.openDashboard());
      } else {
        dispatch(DashboardActions.closeDashboard());
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
