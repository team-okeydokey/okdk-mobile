import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Metrics } from '../Themes/'
import Icon from 'react-native-vector-icons/SimpleLineIcons';

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
    active: PropTypes.bool.isRequired,
    onHeaderPress: PropTypes.func.isRequired,
    headerHeight: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);

    this._setHeader = this._setHeader.bind(this);
    this._getDashboardContent = this._getDashboardContent.bind(this);
  }

  _setHeader() {
    // if (this.props.dashboardOpen) {
      let newTitle = getTabNameByIndex(this.props.currentTab);
      this.setState(previousState => {
        return { title: newTitle };
      });
    // }
  }

  _getDashboardContent() {

    var dashboardContentView;

    switch(this.props.currentTab) {
      case 1: return 
        (<DoorlockSettingsView/>);      
      case 2: return
        (<DoorActivityView/>);
      case 0:
      default: return 
        (<BookingInfoView
          bookingNumber={"DSKDJNSK"} 
          checkIn={"2017-07-10"}
          checkOut={"2017-07-31"}
          hotelName={"Hello hotel"} 
          address={"5000 Forbes Avenue, Pittsburgh, PA 15213"}
          roomType={"Sunset Compact"}
          roomNumber={"201"}
          />);
    }
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
          "top": Metrics.screenHeight - 80,
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

            {/* {this._getDashboardContent()}; */}
            <BookingInfoView
              bookingNumber={"DSKDJNSK"} 
              checkIn={"2017-07-10"}
              checkOut={"2017-07-31"}
              hotelName={"Hello hotel"} 
              address={"5000 Forbes Avenue, Pittsburgh, PA 15213"}
              roomType={"Sunset Compact"}
              roomNumber={"201"}
              />

          </View>

          <View style={styles.dashboardTabContainer}>
            <TouchableOpacity style={styles.dashboardTabButton} 
              onPress={() => this.props._selectTab(0)}> 
              <View style={styles.dashboardTabButtonIcon}> 
                <Icon name="list" size={30} color="#2d2d2d"/>
              </View>
              <Text numberOfLines={1}>{getTabNameByIndex(0)}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dashboardTabButton}
              onPress={() => this.props._selectTab(1)}>
              <View style={styles.dashboardTabButtonIcon}> 
                <Icon name="key" size={30} color="#2d2d2d"/>
              </View>
              <Text numberOfLines={1}>{getTabNameByIndex(1)}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dashboardTabButton}
              onPress={() => this.props._selectTab(2)}> 
              <View style={styles.dashboardTabButtonIcon}> 
                <Icon name="bell" size={30} color="#2d2d2d"/>
              </View>
              <Text numberOfLines={1}>{getTabNameByIndex(2)}</Text>
            </TouchableOpacity>
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
