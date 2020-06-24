import React, {useState} from 'react';
import { Text, ScrollView} from 'react-native';
import RatingVersion2 from './Components/RatingVersion2.js'
import { Card, Button, AirbnbRating } from 'react-native-elements';

// more on ratings here
// https://react-native-elements.github.io/react-native-elements/docs/rating.html

export default function Home({ navigation }) {
    return (
        
      <ScrollView>
            <Card>
                <Button title="Panic"></Button>
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

 