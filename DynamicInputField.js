import React, {useState} from 'react';
import { StyleSheet, Text, View,FlatList, TextInput } from 'react-native';
import { Button, Card } from 'react-native-elements';

const DATA = [
  {
    id: 0,
    title: 'texting a friend'
  },
  {
    id: 1,
    title: 'treating myself to coffee'
  },
]

function Item({title}) {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
      <Text>{title}</Text>
      <Button title="-" type="clear"></Button>
    </View>
  );
}

function add_entry() {
  const [value, onChangeText] = React.useState('');
  return (
    <View>
      <TextInput
        placeholder="texting a friend"
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{width: 250, height:50}}
      />
    </View>
  );
}

function AddItem(item) {

}

function RemoveItem({index}) {

}

export default function DynamicInputField () {
  const [value, onChangeText] = React.useState('');
    return (
        <Card 
        title="How do you fill your Social Bucket?"
        style={{flex: 1, flexDirection: 'column'}}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={item => item.id}
          />
      <TextInput
        placeholder="texting a friend"
        onChangeText={text => onChangeText(text)}
        value={value}
      />
          <Button title="+" type="outline"></Button>
        </Card>
    );
}