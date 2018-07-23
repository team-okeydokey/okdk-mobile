import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Foundation';
import styles from './Styles/KeyCardStyle'
import { connect } from 'react-redux'
import KeyCardActions from '../Redux/KeyCardRedux'
import RoomInfoActions from '../Redux/RoomInfoRedux'

class KeyCard extends Component {
  state = {
    passcode: ""
  };

  componentDidMount() {
    let currSecs = Math.floor(Date.now() / 1000);
    let thirtyMinutes = Math.floor(currSecs / (60 * 30));
    let dateString = (thirtyMinutes * 1337).toString();
    let passCodePrefix = dateString.substr(dateString.length - 4); 
    this.interval = setInterval(() => this.setState({ passcode: this.props.active ? passCodePrefix + '8647' : "" }), 1000); 
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  // Delete constructor after implementing redux
  constructor(props) {
    super(props);
    this._doNotDisturb = this._doNotDisturb.bind(this);   
  }

  // Prop type warnings
  static propTypes = {
    active: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    passcode: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }
  
  // Defaults for props
  static defaultProps = {
    active: false,
    name: "",
    passcode: ""
  }

  _doNotDisturb() {
    if (this.props.doNotDisturb) {
      this.props._requestDoNotDisturb(this.props.user.token, false);
    } else {
      this.props._requestDoNotDisturb(this.props.user.token, true);
    }
  }

  _getDoNotDisturbStyle(isDoNotDisturbActive) {
    return {
      opacity: this.props.active && (this.props.user.room_name != null) ? 1 : 0,
      color: isDoNotDisturbActive ? 'red' : 'gray',
    }
  }

  render () {

    let keyCardStyle = {
      "width": this.props.width,
      "height": this.props.height, 
      "borderRadius": this.props.width/2
    };
    let passcodeStyle = {
      opacity: this.props.active && (this.props.user.room_name != null) ? 1 : 0
    }

    let doNotDisturbStyle = this._getDoNotDisturbStyle(this.props.doNotDisturb);

    return (

      <View style={[styles.keyCard, keyCardStyle]}>

        <TouchableOpacity style={styles.doNotDisturbButton} onPress={this._doNotDisturb} disabled={!this.props.active}> 
            <Text style={[styles.doNotDisturbButtonText, doNotDisturbStyle]}>DO NOT DISTURB</Text>
        </TouchableOpacity>

        <View style={styles.keyCardInfoContainer}>
          <Text style={styles.keyCardName}
              numberOfLines={2}>{this.props.name.toUpperCase()}</Text>
          <Text style={[styles.passcodeLabel, passcodeStyle]}
              numberOfLines={1}>PASSCODE</Text>
          <Text style={[styles.passcodeValue, passcodeStyle]}
              numberOfLines={1}>{this.state.passcode}</Text>
        </View>

      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    activeSlide: state.keyCard.activeSlide,
    doNotDisturb: state.roomInfo.doNotDisturb
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    _onLogout: () => {
      dispatch(KeyCardActions.logout());
    },
    _onSnapToItem: (index) => {
      dispatch(KeyCardActions.slide(index));
    },
    _requestDoNotDisturb: (token, isOn) => {
      dispatch(RoomInfoActions.doNotDisturbRequest(token, isOn));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyCard)
