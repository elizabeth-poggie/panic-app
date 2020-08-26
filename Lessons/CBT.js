
// style sheet information

   
const workbook = require('../Workbook.js');
import {styles} from '../assets/styles'
import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Card, Tile, } from 'react-native-elements';

export default function CBT({ navigation }) {
    navigation.setParams
    return (
        <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
            { workbook.map((chapter) => {
                return (
                    <View style={styles.category_container}>
                        <Text style={styles.title}>{chapter.chapter_title}</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        { chapter.lessons.map((lesson, i) => {
                        return (
                            <View key={i}>
                            <Tile 
                            resizeMode='contain'
                            imageSrc={lesson.lesson_image_path}
                            imageContainerStyle={styles.category_image}
                            title={lesson.lesson_title} 
                            titleStyle={styles.tile_header}
                            featured
                            caption={lesson.lesson_length}
                            captionStyle={styles.tile_paragraph}
                            containerStyle={styles.tile_container}
                            onPress={ () => navigation.navigate(lesson.lesson_component, {lesson_content: lesson.lesson_content})
                            } />
                            </View>
                            );
                        })}
                        </ScrollView>
                    </View>
                );
            })}
        </ScrollView>
    );
}

