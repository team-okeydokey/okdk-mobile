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

entries = [{"title": "Front door", "description": "Description description"}, 
           {"title": "Back door", "description": "Description description description description description"},
           {"title": "Porch door", "description": "Description description description description description"},
           {"title": "Front window", "description": "Description description description description"},
           {"title": "Garage door", "description": "Description description description description description description"}];

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
      let context = this;
      Alert.alert(
        'Already logged in',
        'Delete app data and try again',
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

  render () {
    return (
      // <ScrollView style={styles.container}>
        // <KeyboardAvoidingView behavior='position'>
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
            data={entries}
          />
          <View style={styles.buttonContainer}>

            <TouchableOpacity 
              onPress={this._onOpen}
              style={styles.openButton}>
              <Text style={styles.openText}>OPEN</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeButton}>
              <Text style={styles.closeText}>CLOSE</Text>
            </TouchableOpacity>

          </View>

          {/* <Text style={styles.sectionTitle}>Reservation Details</Text>
          <Text style={styles.sectionTitle}>Room timeline</Text> */}
        {/* </KeyboardAvoidingView>
      </ScrollView> */}
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
