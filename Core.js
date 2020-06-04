import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default function Core({ navigation }) {
    const [fruit, setFruit] = useState('Core Lesson Screen');
    return (
      <View style={styles.container}>
        <Text>{fruit}</Text>
        <br></br>
        <Button title="Next" onPress={() => navigation.navigate('Goal')}></Button>

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