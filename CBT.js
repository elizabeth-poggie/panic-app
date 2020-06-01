const users = [
    {
       name: 'Lessons...'
    }
   ];

import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card, Tile, ListItem, Button, Icon } from 'react-native-elements';

export default function CBT({ navigation }) {
    return (
        <ScrollView>
            <Card title="Self Care">
            {
                users.map((u, i) => {
                return (
                    <View key={i} style={styles.user}>
                    <Tile height={100}
                    imageSrc={require('./assets/square.png')}
                    title="Self Care Buckets"
                    featured
                    caption="7-10 minutes"
                    onPress={ () => navigation.navigate('Lesson1')
                    }
                    />
                    </View>
                );
                })
            }
            </Card>
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
                    onPress
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
                    <Tile height={100}
                    imageSrc={require('./assets/square.png')}
                    title="Grounding Excersize"
                    featured
                    caption="15-30 minutes"
                    onPress
                    />
                    <br></br>
                    <Tile height={100}
                    imageSrc={require('./assets/square.png')}
                    title="Active Mindfulness"
                    featured
                    caption="15-30 minutes"
                    onPress
                    />
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