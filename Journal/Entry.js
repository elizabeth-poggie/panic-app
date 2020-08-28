
import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { Card, Button, CheckBox, Icon} from 'react-native-elements';
import RatingVersion2 from '../Components/RatingVersion2.js'
import {styles} from '../assets/styles'
import Box from '../Components/Box.js'

export default function Entry({ route, navigation }) {
    const [value, onChangeText] = React.useState('');
    const workbook = require('../Workbook.js');
    console.log(workbook[0]["lessons"][0].lesson_content.lesson[0].title)
    return (
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
          <Text style={styles.entry_title}>How are you feeling today?</Text>
          <RatingVersion2 navigation={navigation}/>
          <Card title="Self Care"
          titleStyle={styles.title}
          dividerStyle={{height: 0, marginBottom: 0}}
          containerStyle={{padding:25}}
          >
        {workbook[0]["lessons"][0].lesson_content.lesson.map((item) => {
          return (
            <View>
              <Text style={styles.header}>{item.category}</Text>
              
              {item.data.map((item) => {
                return(
                  <Box 
                  title={item.title} 
                  />
                );
              })}
            </View>
            
          );
          })}
           <TouchableOpacity
            style={[styles.secondary_button, styles.edit_button_location]}
            onPress={() => navigation.navigate(workbook[0]["lessons"][0].lesson_component, {lesson_content: workbook[0]["lessons"][0].lesson_content})}>
            <Icon name='wrench'
              type='font-awesome-5'  
              size={24} 
              color='#fe8e66' />
            </TouchableOpacity>
          </Card>
        
        <Card>
            <TextInput
            style={styles.paragraph}
            placeholder="What's on your mind?"
            onChangeText={text => onChangeText(text)}
            value={value}
            multiline={true}
            />
        </Card>

        <View style={{paddingVertical: 30}}>
          <Button 
          title="Submit"
          buttonStyle={styles.primary_button}
          onPress={() => {navigation.navigate('Journal', {textinput: value}); console.log(value)}}>
          </Button>
        </View>
      </ScrollView>
    );
}