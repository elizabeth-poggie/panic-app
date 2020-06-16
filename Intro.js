
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card } from 'react-native-elements';

const workbook = require('./Workbook');

export default function Intro({ navigation }) {
    
    return (
      <View>
        <Card title="Before you Begin">
          <Text>Self Care underlies healthy living in general, and it is particularly relevant for your mental health. For this reason, we’ve put this section before all other Basic Skills—ideally, you should check-in with your current Self Care and establish new, healthy Self Care habits before attempting any other Basic Skills. You won’t become a world-class skater without first buying a pair of skates—and you wouldn’t get to be very good if those skates were made of wood! Similarly, the Basic Skills and other techniques found in this workbook require a solid foundation; in this case the bedrock of anxiety management is Self Care.</Text>
        </Card>
        <Card>
          <Button title="Start" onPress={() => navigation.navigate('Core')}></Button>
        </Card>
      </View>
    );
}
