
import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, View, CheckBox } from 'react-native';
import { Card} from 'react-native-elements';

export default function Entry({ route, navigation }) {
    
    return (
      <View>
        <Text>{route.params.index}</Text>
        
        <Card title="Social Buckets">

        </Card>
        
        <Card>
            <TextInput
            style={{height: 100}}
            placeholder="What's on your mind?"
            />
        </Card>
      </View>
    );
}