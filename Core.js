import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, Card } from 'react-native-elements';
import DynamicInputField from './DynamicInputField.js';
export default function Core({ navigation }) {

  // need to wrap the text input section with the - / trash bin icon so that every non wanted item can be discarded
    return (
      <View >
        <Card title="Social Self Care"> 
          <Text>The Social bucket has to do with people around you, and the connections that you have with them. </Text>
          <Text>How can you connect with other people? </Text>
          <Text>How can you disconnect when social interactions are getting too much? </Text>
        </Card>
        <DynamicInputField/>
        <Card> 
          <Button title="Next Bucket" onPress={() => navigation.navigate('Goal')}></Button>
        </Card>
      </View>
    );
}