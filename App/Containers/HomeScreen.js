import React, { Component } from 'react'
import { View, ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import KeyCarousel from '../Components/KeyCarousel'

// Styles
import styles from './Styles/HomeScreenStyle'

entries = [{"title": "Front door", "description": "Description description"}, 
           {"title": "Back door", "description": "Description description"},
           {"title": "Porch door", "description": "Description description"},
           {"title": "Front window", "description": "Description description"},
           {"title": "Garage door", "description": "Description description"}];

class HomeScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <View style={styles.screenHeader}>
            <Text style={styles.sectionTitle}>My Keys</Text>
            <Icon name="user" size={30} color="#2d2d2d" />
          </View>
          <KeyCarousel
            sliderWidth={400}
            itemWidth={200}
            data={entries}
          />

          <Text style={styles.sectionTitle}>Reservation Info</Text>
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
