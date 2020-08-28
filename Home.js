import React, {useState} from 'react';
import { Text, View, ScrollView, TouchableOpacity} from 'react-native';
import RatingVersion2 from './Components/RatingVersion2.js'
import { Card, Button, AirbnbRating, Image, Tile, Icon} from 'react-native-elements';
import BoxBreathing from './Lessons/BoxBreathing.js';
import Entry from './Journal/Entry.js'
import {styles} from './assets/styles'
import Box from './Components/Box.js'

// This is the hard coded default activity that i must change later 
const workbook = require('./Workbook.js');
const lesson_content = workbook[1]["lessons"][0].lesson_content;
const lesson_component = workbook[1]["lessons"][0].lesson_component;
const lesson_image = workbook[1]["lessons"][0].lesson_image_path;


export default function Home({ navigation }) {
    return (  
        <View>
      <ScrollView contentContainerStyle={[styles.container, {justifyContent: "center", alignItems: 'center', flexGrow: 1}]}>

        {/*Relaxation Therapy is the activity type suited for dealing with an acute panic attack*/}
        <Tile 
        imageSrc={lesson_image}
        imageContainerStyle={styles.category_image}
        title="Quick Relief" 
        titleStyle={styles.home_tile_header}
        featured
        containerStyle={styles.tile_container}
        onPress={() => {navigation.navigate(lesson_component, {lesson_content: lesson_content})} }
        />
        {/*Systemic Exposure are long=term goal activity types*/}
        {workbook.map((chapter) => {
          if(chapter.chapter_title === 'Systematic Exposure' ){
            return (<View>
            { chapter.lessons.map((lesson) => {
              const les_com = lesson.lesson_component;
              const les_cont = lesson.lesson_content
              return (
              <Card title={lesson.lesson_title}
                titleStyle={styles.title}
                dividerStyle={{height: 0, marginBottom: 0}}
                containerStyle={{padding:25}}
              >
              {lesson.lesson_content.lesson.map((item) => {
                return (
                  <View>
                    {item.data.map((item) => {
                      return(
                        <Box 
                        title={item.title} 
                        />
                      );
                    })}
                  </View>
                );})}
                  <TouchableOpacity
                    style={[styles.secondary_button, styles.edit_button_location]}
                    onPress={() => navigation.navigate(les_com, {lesson_content: les_cont})}>
                    <Icon name='wrench'
                      type='font-awesome-5'  
                      size={24} 
                      color='#fe8e66' />
                    </TouchableOpacity>
                  </Card>)
                    })}
                  </View>)
                  }
                })}
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

 