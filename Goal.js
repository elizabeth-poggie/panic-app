import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default function Goal({ navigation }) {
    const [fruit, setFruit] = useState('Goal Input Screen');
    return (
      <View style={styles.container}>
        <Text>{fruit}</Text>
        <br></br>
        <Button title="Next" onPress={() => navigation.navigate('End')}></Button>

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