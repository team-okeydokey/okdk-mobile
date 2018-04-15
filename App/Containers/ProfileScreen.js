import React, { Component } from 'react'
import { View, ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfileScreenStyle'

class ProfileScreen extends Component {

  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: <LogoTitle />,
    headerTitle: "",
    headerBackTitle: "Discover",
    header: () => null,
  };

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView 
          showsHorizontalScrollIndicator={false} 
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <KeyboardAvoidingView behavior='position'>

          <Text style={styles.screenHeader}>
              Hello, Jason!
          </Text>
            
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
