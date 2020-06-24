
import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, View, CheckBox } from 'react-native';
import { Card, Button} from 'react-native-elements';
import { BaseRouter } from '@react-navigation/native';
import RatingVersion2 from '../Components/RatingVersion2.js'

export default function Entry({ route, navigation }) {
    const [value, onChangeText] = React.useState('');
    
    return (
      <View>
        <Card>
            <RatingVersion2 navigation={navigation} index={route.params.index}/>
        </Card>
        
        <Card title="What did you do for yourself today?">
        </Card>
        
        <Card>
            <TextInput
            style={{height: 100}}
            placeholder="What's on your mind?"
            onChangeText={text => onChangeText(text)}
            value={value}
            multiline={true}
            />
            
        </Card>
        <Card> 
          <Button title="Edit Buckets" type="outline"></Button>
        </Card>

        <Card>
                <Button 
                title="Submit"
                onPress={() => {navigation.navigate('Journal', { screen: 'Entries', params: {textinput: value}}); console.log(value)}}></Button>
            </Card>
      </View>
    );
}