import React, {useState} from 'react';
import { Text, View, ScrollView, TouchableOpacity} from 'react-native';
import RatingVersion2 from './Components/RatingVersion2.js'
import { Card, Button, AirbnbRating, Image, Tile, Icon} from 'react-native-elements';
import BoxBreathing from './Lessons/BoxBreathing.js';
import Entry from './Journal/Entry.js'
import {styles} from './assets/styles'
// more on ratings here
// https://react-native-elements.github.io/react-native-elements/docs/rating.html

// right now hard code the default activity 
const workbook = require('./Workbook.js');
const lesson_content = workbook[1]["lessons"][0].lesson_content;
const lesson_component = workbook[1]["lessons"][0].lesson_component;
const lesson_image = workbook[1]["lessons"][0].lesson_image_path;
export default function Home({ navigation }) {
    return (  
        <View>
      <ScrollView contentContainerStyle={[styles.container, {justifyContent: "center", alignItems: 'center', flexGrow: 1}]}>

        <Tile 
        imageSrc={lesson_image}
        imageContainerStyle={styles.category_image}
        title="Quick Relief" 
        titleStyle={styles.home_tile_header}
        featured
        containerStyle={styles.tile_container}
        onPress={() => {navigation.navigate(lesson_component, {lesson_content: lesson_content})} }
        />
        <Card>
                <Text style={styles.paragraph}>Goals will appear here as the user completes their lessons.</Text>
        </Card>
        <View style={styles.container}></View>
        <View style={styles.container}></View>
      </ScrollView>
      <TouchableOpacity
      style={[styles.secondary_button, styles.journal_button_location]}
      onPress={() => navigation.navigate(Entry)}>
      <Icon name='pen'
        type='font-awesome-5'  
        size={24} 
        color='#fe8e66' />
      </TouchableOpacity>
      </View>
    );
  }

 