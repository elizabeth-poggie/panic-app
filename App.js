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
import BoxBreathing from './Lessons/BoxBreathing.js';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/* to stylize this go here https://reactnavigation.org/docs/tab-based-navigation/ */

export default function Root() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Lessons" component={CBT} />
        <Tab.Screen name="Journal" component={Journal} />
        <Tab.Screen name="Entry" component={Entry} options={{ tabBarButton: () => null, tabBarVisible: false }} />
        <Tab.Screen name="Self Care Buckets" component={SelfCareBuckets} options={{ tabBarButton: () => null, tabBarVisible: false }}/>
        <Tab.Screen name="Box Breathing" component={BoxBreathing} options={{ tabBarButton: () => null, tabBarVisible: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}






