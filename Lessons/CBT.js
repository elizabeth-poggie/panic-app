const users = [
    {
       name: 'Lessons...'
    }
   ];

const workbook = [
    {
        chapter: "Self Care",
        lessons: [
            {
                lesson_title: "Self Care Buckets",
                lesson_length: "7-10 minutes",
                lesson: [
                 {
                   title:"How do you fill your Social Bucket?",
                   details:"This has to do with people around you, and the connections that you have with them. For example, how do you connect with other people and how do you disconnect when social interactions are getting too much?",
                   example_activity: "Texting a friend",
                   data: [
                     {
                       id: 0,
                       title: ''
                     }
                   ],
                 },
                 {
                   title:"How do you fill your Physical Bucket?",
                   details: "This bucket is primarily focused on physical activity, nutrition, and rest/sleep. For ezample, how are you physically active several times a week? How do you relax?",
                   example_activity: "Taking a walk",
                   data: [
                     {
                       id: 0,
                       title: ''
                     }
                   ],
                 },
                 {
                   title:"How do you fill your Emotional Bucket?",
                   details: "The important part of this bucket is to ensure that you are giving yourself space and permission to feel a range of emotions–both ‘positive’ and ‘negative’. How do you ensure that you laugh? How do you let yourself worry?",
                   example_activity: "Planning ‘Worry Time’",
                   data: [
                     {
                       id: 0,
                       title: ''
                     }
                   ],
                 },
                 {
                   title:"How do you fill your Mental Bucket?",
                   details: "The Mental bucket is about both activating and relaxing your brain. This does not include school, your job, or homework. How can you exercise your brain, for example doing puzzles or learning a language? How do you relax your thinking?",
                   example_activity: "Trying a new recipe",
                   data: [
                     {
                       id: 0,
                       title: ''
                     }
                   ],
                 },
                 {
                   title:"How do you fill your Spiritual Bucket?",
                   details: "The Spiritual bucket is about recognizing things outside of yourself and your own day-to-day life. For example, how do you give yourself 'you time' to recognize what matters most? How do you recognize things outside yourself?",
                   example_activity: "Eating Doritos just cause",
                   data: [
                     {
                       id: 0,
                       title: ''
                     }
                   ],
                 }
               ]
             },
             {
                lesson_title: "Some other Self Care lesson",
                lesson_length: "???? minutes",
                lesson: []
             }
        ]
    }
    ,
    {
        chapter: "Breathing",
        lessons: [
            {
                lesson_title: "Box Breathing",
                lesson_length: "7-10 minutes",
                lesson: []
            }
        ]
    }
    ,
    {
        chapter: "Mindfulness",
        lessons: [
            {
                lesson_title: "Grounding Exercise",
                lesson_length: "15-30 minutes",
                lesson: []
            },
            {
                lesson_title: "Active Mindfulness",
                lesson_length: "15-30 minutes",
                lesson: []
            }
        ]
    }
   ];

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      resizeMode: 'contain'
    }
  });
   
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card, Tile, ListItem, Button, Icon } from 'react-native-elements';

export default function CBT({ navigation }) {
    return (
        <ScrollView>
            <Card title="Self Care">
            {
                users.map((u, i) => {
                return (
                    <View key={i}  style={styles.container}>
                    <Tile 
                    resizeMode='contain'
                    imageSrc={require('../assets/square.png')}
                    title="Self Care Buckets"
                    featured
                    caption="7-10 minutes"
                    onPress={ () => navigation.navigate('Self Care Buckets')
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
                    <View key={i} style={styles.container}>
                    <Tile 
                    imageSrc={require('../assets/square.png')}
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
                    <View key={i} style={styles.container}>
                    <Tile 
                    imageSrc={require('../assets/square.png')}
                    title="Grounding Excersize"
                    featured
                    caption="15-30 minutes"
                    onPress
                    />
                    <Tile 
                    imageSrc={require('../assets/square.png')}
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
                    <View key={i} style={styles.container}>
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
                    <View key={i} style={styles.container}>
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
                    <View key={i} style={styles.container}>
                    <Text style={styles.name}>{u.name}</Text>
                    </View>
                );
                })
            }
            </Card>

        </ScrollView>
    );
}

