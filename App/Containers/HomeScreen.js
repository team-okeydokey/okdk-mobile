import React, { Component } from 'react'
import { Alert, View, ScrollView, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { put }  from 'redux-saga/effects';
import { Metrics } from '../Themes/'
import Icon from 'react-native-vector-icons/EvilIcons';
import { NavigationActions } from 'react-navigation';
import AuthActions, { isLoggedIn } from '../Redux/AuthRedux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import KeyCarousel from '../Components/KeyCarousel'

// Styles
import styles from './Styles/HomeScreenStyle'

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.user)
    this._launchProfilePage = this._launchProfilePage.bind(this); 
    this._onOpen = this._onOpen.bind(this);    
  }

  _launchProfilePage() {
    if (!isLoggedIn(this.props)) {
      this.props.navigation.navigate('AuthScreen');
    } else {
      Alert.alert(
        'Already logged in',
        [
          {text: 'Logout', onPress: () => this.props._onLogout(), style: 'cancel'},
          {text: 'OK'},
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
          style={styles.openButton}>
          <Text style={styles.openText}>ENTER CODE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.openButton}>
          <Text style={styles.closeText}>SCAN QR CODE</Text>
        </TouchableOpacity>

      </View>
    )
  }

  _renderLoggedInButtons() {
    return (
      <View style={styles.buttonContainer}>

        <TouchableOpacity 
          onPress={this._onOpen}
          style={styles.openButton}>
          <Text style={styles.openText}>OPEN</Text>
        </TouchableOpacity>

      </View>
    )
  }

  render () {

    let buttons = isLoggedIn(this.props) ? 
      this._renderLoggedInButtons() : this._renderLoggedOutButtons();

    return (
      <View style={styles.container}>
        <View style={styles.screenHeader}>
          <Text style={styles.date}>Friday, June 13th</Text>
          <TouchableOpacity style={styles.profileIcon} onPress={this._launchProfilePage}> 
            <Icon name="user" size={40} color="#2d2d2d"/>
          </TouchableOpacity>
        </View>
        <KeyCarousel
          sliderWidth={Metrics.screenWidth}
          itemWidth={300}
          // data={this.props.user.access}
          data={[{"name": "hello"}, {"name": "world"}]}
        />

        { buttons }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    _onLogout: () => {
      dispatch(AuthActions.logout());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
