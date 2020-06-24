import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home.js';
import CBT from './Lessons/CBT.js';
import Entry from './Journal/Entry.js'
import Journal from './Journal/Journal.js';
import { createStackNavigator } from '@react-navigation/stack';
import SelfCareBuckets from './Lessons/SelfCareBuckets.js';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/* to stylize this go here https://reactnavigation.org/docs/tab-based-navigation/ */

export function Lessons() {
  return (
  <Stack.Navigator
  screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="Lessons"  component={CBT} />
    <Stack.Screen name="Self Care Buckets" component={SelfCareBuckets} />
  </Stack.Navigator>
  );
}

export function JournalEntries() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
    <Stack.Screen name="Entries" component={Journal} />
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






