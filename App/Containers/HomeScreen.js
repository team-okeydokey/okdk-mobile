import React, { Component } from 'react'
import { Alert, View, ScrollView, Text, 
  KeyboardAvoidingView, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'
import { put }  from 'redux-saga/effects';
import { Metrics } from '../Themes/'
import { NavigationActions } from 'react-navigation';
import AuthActions, { isLoggedIn } from '../Redux/AuthRedux'
import DeviceActions from '../Redux/DeviceActionRedux'
import KeyCardActions from '../Redux/KeyCardRedux'
import Dialog from "react-native-dialog";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import KeyCarousel from '../Components/KeyCarousel'
import Dashboard from '../Components/Dashboard'

import { EvilIcons } from '@expo/vector-icons';

// Styles
import styles from './Styles/HomeScreenStyle'

class HomeScreen extends Component {
  state = {
    dialogVisible: false,
    shareEmail: "",
  };

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
          {/* <Text style={styles.actionButtonText}></Text> */}
        </TouchableOpacity>

      </View>
    )
  }

  _showDialog = () => {
    this.setState({ dialogVisible: true });
  };

  _handleCancel = () => {
    this.setState({ dialogVisible: false });
  };

  _handleSend = () => {
    let email = this.state.shareEmail;
    this.props._shareRequest(this.props.user.token, email);
    this.setState({ dialogVisible: false });
  };

  render () {
    let keyCardSize = Metrics.screenWidth * 0.75;

    let bottomButtonSize = Metrics.screenWidth * 0.25;
    let bottomButtonStyle = {
      "width": bottomButtonSize,
      "height": bottomButtonSize,
      "borderRadius": bottomButtonSize / 2.0
    }
    let buttonContainerStyle = {
      "padding": Metrics.doubleSection,
      "marginTop" : Metrics.section - 10
    };

    var bottomButtons, data;

    let loggedIn = isLoggedIn(this.props);

    if (loggedIn) {
      bottomButtons = this._renderLoggedInButtons(bottomButtonStyle, buttonContainerStyle);
      // data = this.props.user.access.filter(i => {
      //   return i.active == true;
      // });
      data = this.props.user.room_name == null ? [{"accessName": "No\rRoom"}] : [{"accessName": this.props.user.room_name}];
    } else {
      bottomButtons =  this._renderLoggedOutButtons(bottomButtonStyle, buttonContainerStyle);
      data = [{"accessName": "No\rRoom"}];
    }

    let dashboardHeaderHeight = Metrics.screenHeight * 0.05;

    let shareButtonTextStyle = {
      opacity: loggedIn ? 1 : 0,
    }

    return (
      <View style={styles.container}>
        <View style={styles.screenHeader}>
          {/* <Text style={styles.date}>FRIDAY, JUNE 13</Text> */}
          <TouchableOpacity style={styles.profileIcon} onPress={this._launchProfilePage}> 
            <Text style={styles.profileText}>PROFILE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}
            disabled={!loggedIn || this.props.user.room_name == null}
            onPress={this._showDialog}>
            <Text style={[styles.shareButtonText, shareButtonTextStyle]}>SHARE</Text>
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

      <Dialog.Container visible={this.state.dialogVisible}
        style={{opacity: 1}}>
        <Dialog.Title>Share Key</Dialog.Title>
        <Dialog.Description>
          Enter email of user to share this key with.
        </Dialog.Description>
        <Dialog.Input
          onChangeText={(text) => this.setState({shareEmail: text})}>
        </Dialog.Input>
        <Dialog.Button label="Cancel" onPress={this._handleCancel} />
        <Dialog.Button label="Send" onPress={this._handleSend} />
      </Dialog.Container>

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
    },
    _shareRequest: (token, email) => {
      dispatch(KeyCardActions.shareRequest(token, email));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
