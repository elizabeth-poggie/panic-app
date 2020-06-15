
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';


export default function Entry({ route, navigation }) {
    
    return (
      <View>
        <Text>{route.params.index}</Text>
      </View>
    );
}