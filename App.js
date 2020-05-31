import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home.js';
import CBT from './CBT.js';

const Tab = createBottomTabNavigator();

/* to stylize this go here https://reactnavigation.org/docs/tab-based-navigation/ */

export default function MyStack({navigation}) {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="CBT" component={CBT} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


