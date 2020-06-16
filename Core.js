import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, Card } from 'react-native-elements';

export default function Core({ navigation }) {
  const [value, onChangeText] = React.useState('');

  // need to wrap the text input section with the - / trash bin icon so that every non wanted item can be discarded
    return (
      <View >
        <Card title="Social Self Care"> 
          <Text>The Social bucket has to do with people around you, and the connections that you have with them. </Text>
          <Text>How can you connect with other people? </Text>
          <Text>How can you disconnect when social interactions are getting too much? </Text>
        </Card>
        <Card title="How do you fill your Social Bucket?">
        


          <View><TextInput
              placeholder="Ex: texting family, going on a walk with a friend, going for a coffee alone"
              onChangeText={text => onChangeText(text)}
              value={value}
              />
            <Button title="-" type="outline"></Button>
          </View>
          <Button title="+" type="outline"></Button>
        </Card>
        <Card> 
          
        </Card>
        <Card> 
          <Button title="Next Bucket" onPress={() => navigation.navigate('Goal')}></Button>
        </Card>
      </View>
    );
}