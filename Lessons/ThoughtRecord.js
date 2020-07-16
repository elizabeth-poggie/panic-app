import React from 'react';
import { StyleSheet, View, ScrollView, TextInput} from 'react-native';
import { Card, Tile, } from 'react-native-elements';

export default class BoxBreathing extends React.Component {
    constructor(props) {  
      super(props);  
    }
    
    render() {
        return (
            <LessonWrapper intro={this.props.route.params.lesson_content.intro}>
            <ScrollView>
                <Card>
                <TextInput
                style={{height: 100}}
                placeholder="Write down an anxious/negative thought you are struggling with"
                onChangeText={text => onChangeText(text)}
                value={value}
                multiline={true}
                />
                <TextInput
                style={{height: 100}}
                placeholder="Balanced/Realistic Self-Talk"
                onChangeText={text => onChangeText(text)}
                value={value}
                multiline={true}
                />
                </Card>
            </ScrollView>
            </LessonWrapper>
        );
    }
}