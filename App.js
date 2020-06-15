import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home.js';
import CBT from './CBT.js';
import Entry from './Entry.js'
import Journal from './Journal.js';
import { createStackNavigator } from '@react-navigation/stack';
import Lesson1 from './Lesson1.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/* to stylize this go here https://reactnavigation.org/docs/tab-based-navigation/ */

export function Lessons() {
  return (
  <Stack.Navigator>
    <Stack.Screen name="Lessons"  component={CBT} />
    <Stack.Screen name="Self Care Buckets" component={Lesson1} />
  </Stack.Navigator>
  );
}

export function JournalEntries() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Journals" component={Journal} />
    <Stack.Screen name="Entry" component={Entry} />
    </Stack.Navigator>
  );
}

export default function Root() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Lessons" component={Lessons} />
        <Tab.Screen name="Journal" component={JournalEntries} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}






