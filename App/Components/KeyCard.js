import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Foundation';
import styles from './Styles/KeyCardStyle'
import ShareDialog from './ShareDialog';
import Dialog from "react-native-dialog";
import { connect } from 'react-redux'
import KeyCardActions from '../Redux/KeyCardRedux'

class KeyCard extends Component {
  state = {
    dialogVisible: false,
    shareEmail: ""
  };
  
  // Delete constructor after implementing redux
  constructor(props) {
    super(props);
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

    let keyCardStyle = {
      "width": this.props.width,
      "height": this.props.height, 
      "borderRadius": this.props.width/2
    };

    let passcodeStyle = {
      opacity: this.props.active ? 1 : 0
    }

    let shareButtonTextStyle = {
      opacity: this.props.active ? 1 : 0,
    }

    return (

      <View style={[styles.keyCard, keyCardStyle]}>

        <Text style={styles.myKeyTitle}
              numberOfLines={1}>MY KEY</Text>

        <View style={styles.keyCardInfoContainer}>
          <Text style={styles.keyCardName}
              numberOfLines={2}>{this.props.name.toUpperCase()}</Text>
          <Text style={[styles.passcodeLabel, passcodeStyle]}
              numberOfLines={1}>PASSCODE</Text>
          <Text style={styles.passcodeValue}
              numberOfLines={1}>{this.props.passcode}</Text>
        </View>

        <TouchableOpacity style={styles.shareButton}
          disabled={!this.props.active}
          onPress={this._showDialog}>
          <Text style={[styles.shareButtonText, shareButtonTextStyle]}>SHARE</Text>
        </TouchableOpacity>

        <Dialog.Container visible={this.state.dialogVisible}>
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
      dispatch(KeyCardActions.logout());
    },
    _onSnapToItem: (index) => {
      dispatch(KeyCardActions.slide(index));
    },
    _shareRequest: (token, email) => {
      dispatch(KeyCardActions.shareRequest(email));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyCard)
