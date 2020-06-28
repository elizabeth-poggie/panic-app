const workbook = require('../Workbook.js');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      resizeMode: 'contain'
    }
  });
   
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Card, Tile, } from 'react-native-elements';

export default function CBT({ navigation }) {
    navigation.setParams
    return (
        <ScrollView>
            { workbook.map((chapter) => {
                return (
                    <Card title={chapter.chapter_title}>
                        { chapter.lessons.map((lesson, i) => {
                        return (
                            <View key={i}  style={styles.container}>
                            <Tile 
                            resizeMode='contain'
                            imageSrc={require('../assets/square.png')}
                            title={lesson.lesson_title}
                            featured
                            caption={lesson.lesson_length}
                            onPress={ () => navigation.navigate(lesson.lesson_component, {lesson_content: lesson.lesson_content})
                            } />
                            </View>
                            );
                        })}
                    </Card>
                );
            })}
        </ScrollView>
    );
}

