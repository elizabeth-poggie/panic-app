
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Intro({ navigation }) {
    const [fruit, setFruit] = useState('intro screen');
    return (
      <View style={styles.container}>
        <Text>{fruit}</Text>
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
