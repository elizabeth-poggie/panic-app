import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './Intro.js';
import Core from './Core.js';
import Goal from './Goal.js';
import End from './End.js';

const Stack = createStackNavigator();

export default function Lesson() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Core" component={Core} />
        <Stack.Screen name="Goal" component={Goal} />
        <Stack.Screen name="End" component={End} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}