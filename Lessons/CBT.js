const users = [
    {
       name: 'Lessons...'
    }
   ];

const workbook = [
    {
        chapter_title: "Self Care",
        lessons: [
            {
                lesson_title: "Self Care Buckets",
                lesson_length: "7-10 minutes",
                lesson_component: 'Self Care Buckets',
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
                lesson_component: 'Self Care Buckets',
                lesson: []
             }
        ]
    }
    ,
    {
        chapter_title: "Breathing",
        lessons: [
            {
                lesson_title: "Box Breathing",
                lesson_length: "7-10 minutes",
                lesson_component: 'Self Care Buckets',
                lesson: []
            }
        ]
    }
    ,
    {
        chapter_title: "Mindfulness",
        lessons: [
            {
                lesson_title: "Grounding Exercise",
                lesson_length: "15-30 minutes",
                lesson_component: 'Self Care Buckets',
                lesson: []
            },
            {
                lesson_title: "Active Mindfulness",
                lesson_length: "15-30 minutes",
                lesson_component: 'Self Care Buckets',
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
            { workbook.map((chapter) => {
                return (
                    <Card title={chapter.chapter_title}>
                        { chapter.lessons.map((lesson, i) => {
                        return (
                            <View key={i}  style={styles.container}>
                            <Tile 
                            resizeMode='contain'
                            imageSrc={require('../assets/square.png')}
                            title={lesson.lesson_title}
                            featured
                            caption={lesson.lesson_length}
                            onPress={ () => navigation.navigate(lesson.lesson_component)
                            } />
                            </View>
                            );
                        })}
                    </Card>
                );
            })}
        </ScrollView>
    );
}

