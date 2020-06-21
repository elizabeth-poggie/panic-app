import React, {Component} from 'react';
import { StyleSheet, Text, View,FlatList, TextInput } from 'react-native';
import { Button, Card } from 'react-native-elements';


export default class DynamicInputField extends Component {  
  
  renderItem(title) {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
        <Text>{title}</Text>
        <Button title="-" type="clear" onPress={index => this.removeItem(index)}></Button>
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
  
  addItem(item) {
  
  }
  
  removeItem({index}) {
    let dataArray = this.state.data;
    dataArray.splice(index, 1);
    this.setState({data: dataArray});
  }

  constructor(props) {  
      super(props);  
      this.state = {
        text: '',
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
  }  

  render() {  
    return (  
      <Card 
      style={{flex: 1, flexDirection: 'column'}}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => this.renderItem(item.title)}
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
}  