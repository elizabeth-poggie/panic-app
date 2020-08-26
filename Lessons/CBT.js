
// style sheet information

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      padding: 30,
    },
    category_container: {
        paddingBottom: 30,
        overflow: 'hidden',
    },
    tile_container: {
        flex: 1,
        width: '90%'
      },
    category_image: {
        width: '100%',
        aspectRatio: 1,
        overflow: 'hidden',
    },
    title: {
        fontFamily: 'title_font',
        fontSize: 30,
        paddingBottom: 10,
    },
    tile_header: {
        fontFamily: 'header_font',
        position: 'absolute',
        left: 10,
        bottom: 15,
    },
    tile_paragraph: {
        fontFamily: 'header_font',
        position: 'absolute',
        left: 10,
        bottom: 0,
    }
  });
   
const workbook = require('../Workbook.js');

import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
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

