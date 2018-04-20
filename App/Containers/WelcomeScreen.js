import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import RoundedButton from '../Components/RoundedButton'
import AlertMessage from '../Components/AlertMessage'
import { Images } from '../Themes'

// Styles
import styles from './Styles/WelcomeScreenStyle'

class WelcomeScreen extends Component {

  showComingSoon() {
    Alert.alert('Coming soon!')
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <View style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section}>
            <Text style={styles.sloganText}>
              Next Generation IoT Security Solutions
            </Text>
          </View>

          <View style={styles.section} >
            <TouchableOpacity onPress={this.showComingSoon}>
              <Text style={styles.authTextUnderline}>
                Join OkeyDokey
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.showComingSoon}>
              <Text style={styles.authTextNormal}>
                Already a member? <Text style={styles.authTextUnderline}>Sign in</Text>
              </Text>
            </TouchableOpacity>
            <RoundedButton onPress={this.props.onExplore}>
              Or Just Explore OkeyDokey
            </RoundedButton>
            <Text style={styles.licenseText}>
              © 2018 OKEYDOKEY, INC
            </Text>
          </View>
          
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => ({
  onExplore: () => {
    dispatch(NavigationActions.back());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)
