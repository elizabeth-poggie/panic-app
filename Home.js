import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({ navigation }) {
    const [fruit, setFruit] = useState('hello world');
    return (
      <View style={styles.container}>
        <Text>{fruit}</Text>

        <div>
        <Button title="CBT" onPress={() => navigation.navigate('CBT')} />
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