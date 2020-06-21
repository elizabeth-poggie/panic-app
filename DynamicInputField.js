import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, Card } from 'react-native-elements';



export default function DynamicInputField () {
  const [value, onChangeText] = React.useState('');

    return (
        <Card title="How do you fill your Social Bucket?">
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
            <TextInput
              placeholder="Ex: texting family, going on a walk with a friend, going for a coffee alone"
              onChangeText={text => onChangeText(text)}
              value={value}
              style={{width: 500}}
            />
            <Button title="-" type="outline"></Button>
          </View>
          <Button title="+" type="outline"></Button>
        </Card>
    );
}