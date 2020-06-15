import React, {useState} from 'react';
import { Text, ScrollView} from 'react-native';
import CBT from './CBT.js';
import Rating from './Rating.js';
import RatingVersion2 from './RatingVersion2.js'
import { Card, Button, AirbnbRating } from 'react-native-elements';

// more on ratings here
// https://react-native-elements.github.io/react-native-elements/docs/rating.html

export default function Home({ navigation }) {
    return (
        
      <ScrollView>
            <Card>
                <Button title="Panic"></Button>
            </Card>
            <Card>
                <RatingVersion2 navigation={navigation}/>
            </Card>
            <Card>
                <Text>Goals will appear here as the user completes their lessons.</Text>
            </Card>
            <Card>
                <Text>Self Care Goals</Text>
            </Card>
            <Card>
                <Text>Breathing Goals. (for example doing an excersize of breathing 2 or 3 times a day)</Text>
            </Card>
            <Card>
                <Text>Grounding Goals</Text>
            </Card>
            <Card>
                <Text>Mindfulness Goals</Text>
            </Card>
      </ScrollView>
    );
  }

 