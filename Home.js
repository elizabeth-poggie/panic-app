import React, {useState} from 'react';
import { Text, ScrollView} from 'react-native';
import RatingVersion2 from './Components/RatingVersion2.js'
import { Card, Button, AirbnbRating } from 'react-native-elements';
import BoxBreathing from './Lessons/BoxBreathing.js';

// more on ratings here
// https://react-native-elements.github.io/react-native-elements/docs/rating.html

// right now hard code the default activity 
const workbook = require('./Workbook.js');
const lesson_content = workbook[1]["lessons"][0].lesson_content;
const lesson_component = workbook[1]["lessons"][0].lesson_component;

export default function Home({ navigation }) {
    return (  
      <ScrollView>
            <Card>
                <Button title="Panic" onPress={() => {navigation.navigate(lesson_component, {lesson_content: lesson_content})}}></Button>
            </Card>
            <Card title="How are you feeling today?">
                <RatingVersion2 navigation={navigation}/>
            </Card>
            <Card>
                <Text>Goals will appear here as the user completes their lessons.</Text>
            </Card>
      </ScrollView>
    );
  }

 