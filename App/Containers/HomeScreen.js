import React, { Component } from 'react'
import { Alert, View, ScrollView, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { put }  from 'redux-saga/effects';
import { Metrics } from '../Themes/'
import Icon from 'react-native-vector-icons/EvilIcons';
import { NavigationActions } from 'react-navigation';
import AuthActions, { isLoggedIn } from '../Redux/AuthRedux'
import KeyCardActions from '../Redux/KeyCardRedux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import KeyCarousel from '../Components/KeyCarousel'

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
  }

  _onClose() {
  }

  _renderLoggedOutButtons() {
    return (
      <View style={styles.buttonContainer}>

        <TouchableOpacity 
          onPress={this._onOpen}
          style={styles.actionButton}>
          <Text style={styles.actionButtonText}>ENTER CODE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}>
          <Text style={styles.actionButtonText}>SCAN QR CODE</Text>
        </TouchableOpacity>

      </View>
    )
  }

  _renderLoggedInButtons() {
    return (
      <View style={styles.buttonContainer}>

        <TouchableOpacity 
          onPress={this._onOpen}
          style={styles.actionButton}>
          <Text style={styles.actionButtonText}>OPEN</Text>
        </TouchableOpacity>

      </View>
    )
  }

  render () {

    var bottomButtons, data, active;

    if (isLoggedIn(this.props)) {
      bottomButtons = this._renderLoggedInButtons();
      data = this.props.user.access;
      active = true;
    } else {
      bottomButtons =  this._renderLoggedOutButtons();
      data = [{"accessName": "Not Available"}];
      active = false;
    } 

    let size = Metrics.screenWidth * 0.75;

    return (
      <View style={styles.container}>
        <View style={styles.screenHeader}>
          <Text style={styles.date}>FRIDAY, JUNE 13</Text>
          <TouchableOpacity style={styles.profileIcon} onPress={this._launchProfilePage}> 
            <Icon name="user" size={40} color="#2d2d2d"/>
          </TouchableOpacity>
        </View>
        <KeyCarousel
          sliderWidth={Metrics.screenWidth}
          itemWidth={size}
          itemHeight={size}
          data={data}
          onSnapToItem={(index) => this.props._onSnapToItem(index) }
          active={active}
          activeSlide={this.props.activeSlide}
        />

        { bottomButtons }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    activeSlide: state.keyCard.activeSlide
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    _onLogout: () => {
      dispatch(AuthActions.logout());
    },
    _onSnapToItem: (index) => {
      dispatch(KeyCardActions.slide(index));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
