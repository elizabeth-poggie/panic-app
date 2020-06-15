
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const workbook = require('./Workbook');

export default function Intro({ navigation }) {
    
    return (
      <View style={styles.container}>
        <Text></Text>
        <Button title="Next" onPress={() => navigation.navigate('Core')}></Button>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
