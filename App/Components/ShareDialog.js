import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/ShareDialogStyle'
import Dialog from "react-native-dialog";

export default class ShareDialog extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View>
        <Dialog.Container>
          <Dialog.Title>Account delete</Dialog.Title>
          <Dialog.Description>
            Do you want to delete this account? You cannot undo this action.
          </Dialog.Description>
          <Dialog.Button label="Cancel" />
          <Dialog.Button label="Delete" />
        </Dialog.Container>
      </View>
    )
  }
}
