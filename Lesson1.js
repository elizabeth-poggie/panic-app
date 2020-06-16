import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './Intro.js';
import Core from './Core.js';
import Goal from './Goal.js';
import End from './End.js';

const Stack = createStackNavigator();

export default function Lesson1() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Core" component={Core} />
        <Stack.Screen name="Goal" component={Goal} />
        <Stack.Screen name="End" component={End} />
      </Stack.Navigator>
  );
}