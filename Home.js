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
            <Card title="Mood rating that will be replaced with something that looks nice later">
                <Text>Once the user clicks a rating, it will let them make a journal entry.....</Text>
                <AirbnbRating
                count={5}
                reviews={["Awful", "Bad", "OK", "Good", "Amazing"]}
                defaultRating={3}
                size={20}
                />
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

 