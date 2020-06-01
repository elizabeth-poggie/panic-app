import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home.js';
import CBT from './CBT.js';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './Intro.js';
import Core from './Core.js';
import Goal from './Goal.js';
import End from './End.js';
import Lesson1 from './Lesson1.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/* to stylize this go here https://reactnavigation.org/docs/tab-based-navigation/ */

export function Lessons() {
  return (
  <Stack.Navigator>
    <Stack.Screen name="Lessons"  component={CBT} />
    <Stack.Screen name="Lesson1" component={Lesson1} />
  </Stack.Navigator>
  );
}

export default function Root() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Lessons" component={Lessons} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}






