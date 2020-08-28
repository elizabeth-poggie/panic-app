import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { Card, Button, CheckBox, Icon} from 'react-native-elements';
import RatingVersion2 from '../Components/RatingVersion2.js'
import {styles} from '../assets/styles'


export default class Box extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        checked: false
      };
    }
  
    render() {
      return (
        <CheckBox
          title={this.props.title}
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          containerStyle={styles.checkbox}
          textStyle={styles.paragraph}
          checked={this.state.checked}
          checkedColor={'#fe8e66'}
          onPress={() => this.setState({checked: !this.state.checked})}
        />
      );
    }
  }