import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CBT from './CBT.js';

export default function Home({ navigation }) {
    const [fruit, setFruit] = useState('hello world');
    return (
      <View style={styles.container}>
        <Text>{fruit}</Text>

        <div>
        <Button title="Intro" onPress={() => navigation.navigate('Intro')} />
        </div>
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