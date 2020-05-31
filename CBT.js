const users = [
    {
       name: 'nice'
    }
   ];

import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card, Tile, ListItem, Button, Icon } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './Intro.js';

const Stack = createStackNavigator();

export default function CBT({ navigation }) {
    return (
        <ScrollView>
            <Card title="Deep Breathing">
            {
                users.map((u, i) => {
                return (
                    <View key={i} style={styles.user}>
                    <Tile height={100}
                    imageSrc={require('./assets/square.png')}
                    title="Box Breathing"
                    featured
                    caption="7-10 minutes"
                    />
                    </View>
                );
                })
            }
            </Card>
            <Card title="Mindfulness">
            {
                users.map((u, i) => {
                return (
                    <View key={i} style={styles.user}>
                    <Text style={styles.name}>{u.name}</Text>
                    </View>
                );
                })
            }
            </Card>
            <Card title="Relaxation">
            {
                users.map((u, i) => {
                return (
                    <View key={i} style={styles.user}>
                    <Text style={styles.name}>{u.name}</Text>
                    </View>
                );
                })
            }
            </Card>
            <Card title="Worry Time">
            {
                users.map((u, i) => {
                return (
                    <View key={i} style={styles.user}>
                    <Text style={styles.name}>{u.name}</Text>
                    </View>
                );
                })
            }
            </Card>
            <Card title="Time Managment">
            {
                users.map((u, i) => {
                return (
                    <View key={i} style={styles.user}>
                    <Text style={styles.name}>{u.name}</Text>
                    </View>
                );
                })
            }
            </Card>

        </ScrollView>
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