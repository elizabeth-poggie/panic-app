import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ButtonGroup } from 'react-native-elements';


export default class RatingVersion2 extends React.Component {
    
    constructor (props) {
        super(props)
        this.state = {
          //selectedIndex: 2
        }
        this.updateIndex = this.updateIndex.bind(this)
      }
      
      updateIndex (selectedIndex) {
        this.setState({selectedIndex})
        // now navigate
        this.props.navigation.navigate('Journal', { screen: 'Entry', params: {index: selectedIndex}})
      }
      
      render () {
        const buttons = ['Awful', 'Bad', 'OK', 'Good', 'Fantastic']
        const { selectedIndex } = this.state
      
        return (
          <ButtonGroup
            selectedIndex={selectedIndex}
            buttons={buttons}
            onPress={this.updateIndex}
            containerStyle={{height: 100}}
          />
        )
      }
}