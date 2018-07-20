import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import { Font } from 'expo';

// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount () {

    await Font.loadAsync({
      'Lato-Black': require('../assets/fonts/Lato-Black.ttf'),
      'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
      'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf'),
    });

    this.setState({ fontLoaded: true });

    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render () {
    return (this.state.fontLoaded &&
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
