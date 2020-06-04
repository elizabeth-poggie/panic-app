import React, {useState} from 'react';
import { Text, ScrollView} from 'react-native';
import CBT from './CBT.js';
import { Card, Button, Rating, AirbnbRating } from 'react-native-elements';

// more on ratings here
// https://react-native-elements.github.io/react-native-elements/docs/rating.html

export default function Home({ navigation }) {
    return (
      <ScrollView>
            <Card>
                <Button title="I am having a panic attack"></Button>
            </Card>
            <Card>
                <AirbnbRating
                count={5}
                reviews={["Awful", "Bad", "OK", "Good", "Amazing"]}
                defaultRating={3}
                size={20}
                />
            </Card>
            <Card>
                <Text>Self Care Goals</Text>
            </Card>
            <Card>
                <Text>Breathing Goals</Text>
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

 