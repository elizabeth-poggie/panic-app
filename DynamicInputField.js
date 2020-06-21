import React, {Component, ScrollView, TouchableOpacity} from 'react';
import { StyleSheet, Text, View,FlatList, TextInput } from 'react-native';
import { Button, Card } from 'react-native-elements';


export default class DynamicInputField extends Component {  

  constructor(props) {  
    super(props);  
    this.state = {
      text: '',
      disabled: false,
      data: 
      [
        {
          id: 0,
          title: 'texting a friend'
        },
        {
          id: 1,
          title: 'treating myself to coffee'
        }
      ]
    }; 
    this.index = 2; 
  }  
  
  renderItem(item) {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
        <Text>{item.title}</Text>
        <Button title="-" type="clear" onPress={index => this.removeItem(item.id)}></Button>
      </View>
    );
  }
  
  add_entry() {
    const [value, onChangeText] = React.useState('');
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
        <TextInput
          placeholder="texting a friend"
          onChangeText={text => onChangeText(text)}
          value={value}
          style={{width: 250, height:50}} 
        />
        <Button title="-" type="clear" ></Button>
      </View>
    );
  }
  
  addItem() {
    const newlyAddedValue = {id: this.index, title: this.text}
    this.setState({
      disabled: true,
      valueArray: [...this.state.data, newlyAddedValue]
    });
    this.index += 1;
    this.setState({ disabled: false });
  }
  
  removeItem(id) {
    const newArray = [...this.state.data];
    newArray.splice(newArray.findIndex(ele => ele.id === id), 1);
    this.setState(() => {
      return {
        data: newArray
      }
    });
  }

  render() {
    return (
      <Card >
        <View style={{ flex: 1, padding: 4 }}>
          {this.state.data.map(item => this.renderItem(item))}
        </View>
        <Button title="+" type="outline" disabled={this.state.disabled} onPress={this.addItem}></Button>
      </Card>
    );
  }
  

  /*
  render() {  
    return (  
      <Card 
      style={{flex: 1, flexDirection: 'column'}}>
        <FlatList
          data={this.state.data}
          renderItem={({ item, index }) => this.renderItem(item.title, index)}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
          <TextInput
            placeholder="texting a friend"
            onChangeText={text => this.setState({text})}
            style={{width: 250, height:50}}
          />
          <Button title="-" type="clear" style={{width: 50, height:50}}></Button>
        </View>
        <Button title="+" type="outline"></Button>
      </Card>
  );
  }  
  */
}  