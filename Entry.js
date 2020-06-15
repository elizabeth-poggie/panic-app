
import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, View, CheckBox } from 'react-native';
import { Card, Button} from 'react-native-elements';

export default function Entry({ route, navigation }) {
    const [value, onChangeText] = React.useState('');
    
    return (
      <View>
        
        
        <Card title="Buckets Checklist">
        <Text>Mood level is {route.params.index}</Text>
        </Card>
        
        <Card>
            <TextInput
            style={{height: 100}}
            placeholder="What's on your mind?"
            onChangeText={text => onChangeText(text)}
            value={value}
            />
            
        </Card>

        <Card>
                <Button 
                title="Submit"
                onPress={() => {navigation.navigate('Journal', { screen: 'Entries', params: {textinput: value}}); console.log(value);}}></Button>
            </Card>
      </View>
    );
}