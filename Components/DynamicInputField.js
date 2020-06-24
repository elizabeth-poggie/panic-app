import React, {Component, ScrollView, TouchableOpacity} from 'react';
import { StyleSheet, Text, View,FlatList, TextInput } from 'react-native';
import { Button, Card } from 'react-native-elements';


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
          placeholder={this.props.example_activity}
        />
        <Button title="-" type="clear" onPress={index => this.removeItem(item.id)}></Button>
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
      <Card title={this.props.title}>
        <Text>{this.props.details}</Text>
        <View style={{ padding: 4 }}>
          {this.state.data.map(item => this.renderItem(item))}
        </View>
        <Button title="+" type="outline" disabled={this.state.disabled} onPress={this.addItem}></Button>
      </Card>
    );
  }
}  