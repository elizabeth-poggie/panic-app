import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home.js';
import CBT from './CBT.js';
import {NavBar, Icon} from 'antd-mobile';

const Stack = createStackNavigator();

export default function MyStack({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen 
          name="CBT" 
          component={CBT} 
          options={{ title: 'CBT' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
// cannot put the navigation bar on this screen since this is where the names for the different screens are defined

