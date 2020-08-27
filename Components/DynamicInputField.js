import React, {Component, ScrollView} from 'react';
import { StyleSheet, Text, View,FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Button, Card, Icon} from 'react-native-elements';
import {styles} from '../assets/styles'

export default class DynamicInputField extends Component {  

  constructor(props) {  
    super(props);  
    this.state = {
      disabled: false,
      data: this.props.data,
    }
    this.index = this.props.data.length; 
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.resetItemIds = this.resetItemIds.bind(this);
  }  

  resetItemIds() {
    for (var i=0; i< this.state.data.length; i++) {
        this.state.data[i] = {id: i, title: this.state.data[i].title};
    }
    console.log(this.state.data);
  }

  handleInput(id) {
    return (text) => {
      const newlyAddedValue = { id: id, title: text }
      const newArray = this.state.data;
      newArray[newArray.findIndex(ele => ele.id === id)] = newlyAddedValue;
      this.setState({
        data: newArray
      });
    }
  }
  
  renderItem(item) {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TextInput
          onChangeText={this.handleInput(item.id)}
          value={item.title}
          style={[styles.header]}
          placeholder={this.props.example_activity}
        />
        <TouchableOpacity
            style={{padding: 0, margin: 0, alignSelf: 'center'}}
            disabled={this.state.disabled} 
            onPress={index => this.removeItem(item.id)}
            >
            <Icon name='minus'
              type='font-awesome-5'  
              size={15} 
              color='#fe8e66' />
            </TouchableOpacity>
      </View>
    );
  }
  
  addItem() {
    const newlyAddedValue = {id: this.index, title: ''};
    this.setState({
      disabled: true,
      data: [...this.state.data, newlyAddedValue]
    });
    this.index += 1;
    this.setState({ disabled: false });
  }
  
  removeItem(id) {
    const newArray = this.state.data;
    newArray.splice(newArray.findIndex(ele => ele.id === id), 1);
    this.setState(() => {
      return {
        data: newArray
      }
    });
    this.resetItemIds();
    this.index -= 1;
    // when an item is removed, need to reset all the indexes to be that of the array value
  }

  render() {
    return (
      <Card title={this.props.title}
        titleStyle={styles.title}
        dividerStyle={{height: 0, marginBottom: 0}}>
        <Text style={styles.paragraph}>{this.props.details}</Text>
        <View style={{ paddingVertical: 10}}>
          {this.state.data.map(item => this.renderItem(item))}
        </View>
        <TouchableOpacity
            style={[styles.secondary_button, styles.dynamic_button_location, {padding: 15}]}
            disabled={this.state.disabled} 
            onPress={this.addItem}
            >
            <Icon name='plus'
              type='font-awesome-5'  
              size={20} 
              color='#fe8e66' />
            </TouchableOpacity>
        
      </Card>
    );
  }
}  