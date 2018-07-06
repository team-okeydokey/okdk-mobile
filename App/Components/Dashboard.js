import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Metrics } from '../Themes/'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
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
    onHeaderPress: PropTypes.func.isRequired,
    headerHeight: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);

    this._getDashboardContent = this._getDashboardContent.bind(this);
    this._tabBarButton = this._tabBarButton.bind(this);
    this._tabButtonIconStyle = this._tabButtonIconStyle.bind(this);
    this._getTabColor = this._getTabColor.bind(this);
  }

  _getDashboardContent() {

    console.log("currentTab", this.props.currentTab)

    var dashboardContentView;

    switch(this.props.currentTab) {
    case 1: dashboardContentView = (<DoorlockSettingsView/>); break;
    case 2: dashboardContentView = (<DoorActivityView/>); break;
    case 0:
    default: dashboardContentView = 
        (
        <BookingInfoView
          bookingNumber={"DSKDJNSK"} 
          checkIn={"2017-07-10"}
          checkOut={"2017-07-31"}
          hotelName={"Hello hotel"} 
          address={"5000 Forbes Avenue, Pittsburgh, PA 15213"}
          roomType={"Sunset Compact"}
          roomNumber={"201"}
          />);
    }
    return dashboardContentView;
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
    data=[{type: 0, description: 'Housekeeping', timestamp: 0}, {type: 1, description: 'Failed attempt', timestamp: 0},
    {type: 0, description: 'John opened door', timestamp: 0}, {type: 1, description: 'Failed attempt', timestamp: 0}, 
    {type: 1, description: 'Failed attempt', timestamp: 0}, {type: 0, description: 'test1', timestamp: 0},
    {type: 0, description: 'test1', timestamp: 0}]
    let dashboardContentView;

    if (this.props.currentTab == 0) {
      dashboardContentView = <BookingInfoView
      bookingNumber={"DSKDJNSK"} 
      checkIn={"2017-07-10"}
      checkOut={"2017-07-31"}
      hotelName={"Hello hotel"} 
      address={"5000 Forbes Avenue, Pittsburgh, PA 15213"}
      roomType={"Sunset Compact"}
      roomNumber={"201"}
      />
    } else if (this.props.currentTab == 1) {
      dashboardContentView = <DoorlockSettingsView/>;
    } else {
      dashboardContentView = <DoorActivityView/>;
    }

    // const dashboardHeaderStyle = {
    //   "height": headerHeight,
    // }

    return (

      <SlidingUpPanel
        visible
        startCollaped
        showBackdrop={false}
        allowMomentum={false}
        draggableRange={{
          "top": Metrics.screenHeight - Metrics.screenHeight * 0.1,
          "bottom": this.props.headerHeight
        }}
        // onDrag={this._setHeader}
        >
        <View style={styles.panelView}>
          <TouchableOpacity
            style={styles.dashboardHeaderContainer}
            onPress={this.props.onHeaderPress}>
            <Text style={styles.dashboardHeader}>
              {this.props.title}
            </Text>
          </TouchableOpacity>

          <View style={styles.dashboardContent}>

            {/* {dashboardContentView}; */}
            {/* <BookingInfoView
              bookingNumber={"DSKDJNSK"} 
              checkIn={"2017-07-10"}
              checkOut={"2017-07-31"}
              hotelName={"Hello hotel"} 
              address={"5000 Forbes Avenue, Pittsburgh, PA 15213"}
              roomType={"Sunset Compact"}
              roomNumber={"201"}
              /> */}
            {/* <DoorlockSettingsView/> */}
            <DoorActivityView
            activityData={data}/>

          </View>

          <View style={styles.dashboardTabContainer}>
            { this._tabBarButton(0) }

            { this._tabBarButton(1) }

            { this._tabBarButton(2) }
          </View>
        </View>
      </SlidingUpPanel>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dashboardOpen: state.dashboard.open,
    title: state.dashboard.title,
    currentTab: state.dashboard.currentTab
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    _selectTab: (index) => {
      dispatch(DashboardActions.selectTab(index));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
