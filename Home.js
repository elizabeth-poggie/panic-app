import React, {useState} from 'react';
import { Text, ScrollView} from 'react-native';
import CBT from './CBT.js';
import { Card, Button, ListItem, Icon } from 'react-native-elements';

export default function Home({ navigation }) {
    return (
      <ScrollView>
            <Card>
            <Button title="I am having an Attack"></Button>
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

 