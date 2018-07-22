import React, { Component } from 'react'
import { Alert, View, ScrollView, Text, 
  KeyboardAvoidingView, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'
import { put }  from 'redux-saga/effects';
import { Metrics } from '../Themes/'
import { EvilIcons } from '@expo/vector-icons';
import { NavigationActions } from 'react-navigation';
import AuthActions, { isLoggedIn } from '../Redux/AuthRedux'
import DeviceActions from '../Redux/DeviceActionRedux'
import KeyCardActions from '../Redux/KeyCardRedux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import KeyCarousel from '../Components/KeyCarousel'
import Dashboard from '../Components/Dashboard'

// Styles
import styles from './Styles/HomeScreenStyle'

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    
    this._launchProfilePage = this._launchProfilePage.bind(this); 
    this._onOpen = this._onOpen.bind(this);    
  }

  _launchProfilePage() {
    if (!isLoggedIn(this.props)) {
      this.props.navigation.navigate('AuthScreen');
    } else {
      Alert.alert(
        'Already logged in',
        'Log out to view auth page.',
        [
          {text: 'Logout', onPress: () => this.props._onLogout()},
          {text: 'OK'}
        ],
        { cancelable: false }
      )
    }
  }

  _onOpen() {
    let token = this.props.user.token;
    this.props._open(token);
  }

  _onClose() {
  }

  _renderLoggedOutButtons(bottomButtonStyle, buttonContainerStyle) {    

    return (
      <View style={[styles.buttonContainer, buttonContainerStyle]}>

        {/* <TouchableOpacity 
          onPress={this._onOpen}
          style={[styles.actionButton, bottomButtonStyle]}>
          <Text style={styles.actionButtonText}>ENTER CODE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, bottomButtonStyle]}>
          <Text style={styles.actionButtonText}>SCAN QR CODE</Text>
        </TouchableOpacity> */}

      </View>
    )
  }

  _renderLoggedInButtons(bottomButtonStyle, buttonContainerStyle) {
    return (
      <View style={[styles.buttonContainer, buttonContainerStyle]}>

        <TouchableOpacity 
          onPress={this._onOpen}
          style={[styles.actionButton, bottomButtonStyle]}>
          <Text style={styles.actionButtonText}>OPEN</Text>
        </TouchableOpacity>

      </View>
    )
  }

  render () {
    let keyCardSize = Metrics.screenWidth * 0.75;

    let bottomButtonSize = Metrics.screenWidth * 0.25;
    let bottomButtonStyle = {
      "width": bottomButtonSize,
      "height": bottomButtonSize,
      "borderRadius": bottomButtonSize / 2.0
    }
    let buttonContainerStyle = {
      "padding": Metrics.doubleSection
    };

    var bottomButtons, data;

    let loggedIn = isLoggedIn(this.props);

    if (loggedIn) {
      bottomButtons = this._renderLoggedInButtons(bottomButtonStyle, buttonContainerStyle);
      // data = this.props.user.access.filter(i => {
      //   return i.active == true;
      // });
      data = [{"accessName": this.props.user.room_name}];
    } else {
      bottomButtons =  this._renderLoggedOutButtons(bottomButtonStyle, buttonContainerStyle);
      data = [{"accessName": "Not Available"}];
    }

    let dashboardHeaderHeight = Metrics.screenHeight * 0.05;

    return (
      <View style={styles.container}>
        <View style={styles.screenHeader}>
          {/* <Text style={styles.date}>FRIDAY, JUNE 13</Text> */}
          <TouchableOpacity style={styles.profileIcon} onPress={this._launchProfilePage}> 
            <EvilIcons name="user" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <KeyCarousel
          active={loggedIn}
          sliderWidth={Metrics.screenWidth}
          itemWidth={keyCardSize}
          itemHeight={keyCardSize}
          data={data}
          onSnapToItem={(index) => this.props._onSnapToItem(index) }
          active={loggedIn}
          activeSlide={this.props.activeSlide}
        />

        { bottomButtons }

        {loggedIn && 
          <Dashboard
          headerHeight={dashboardHeaderHeight}>
          </Dashboard> }

      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    activeSlide: state.keyCard.activeSlide,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    _onLogout: () => {
      dispatch(AuthActions.logout());
    },
    _onSnapToItem: (index) => {
      dispatch(KeyCardActions.slide(index));
    },
    _open: (token) => {
      dispatch(DeviceActions.open(token));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
