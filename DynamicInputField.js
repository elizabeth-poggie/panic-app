import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, Card } from 'react-native-elements';



export default function DynamicInputField () {
  const [value, onChangeText] = React.useState('');

    return (
        <Card 
        title="How do you fill your Social Bucket?"
        style={{flex: 1, flexDirection: 'column'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
            <TextInput
              placeholder="texting a friend"
              onChangeText={text => onChangeText(text)}
              value={value}
              style={{width: 250, height:50}}
            />
            <Button title="-" type="clear" style={{width: 50, height:50}}></Button>
          </View>
          <Button title="+" type="outline"></Button>
        </Card>
    );
}