import React, { Component } from 'react'
import { View, ScrollView, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux'
import { put }  from 'redux-saga/effects';
import { Metrics } from '../Themes/'
import Icon from 'react-native-vector-icons/EvilIcons';
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
  }

  _launchProfilePage() {
    this.props.navigation.navigate('AuthScreen')
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text style={styles.date}>Friday, June 13th</Text>
          <View style={styles.screenHeader}>
            <Text style={styles.sectionTitle}>My Keys</Text>
            <TouchableOpacity style={styles.profileIcon} onPress={this._launchProfilePage}> 
              <Icon name="user" size={40} color="#2d2d2d"/>
            </TouchableOpacity>
          </View>
          <KeyCarousel
            sliderWidth={Metrics.screenWidth}
            itemWidth={300}
            data={entries}
          />

          <Text style={styles.sectionTitle}>Reservation Details</Text>
          <Text style={styles.sectionTitle}>Room timeline</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
