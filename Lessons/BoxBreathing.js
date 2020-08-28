import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import DynamicInputField from '../Components/DynamicInputField.js';
import LessonWrapper from '../Components/LessonWrapper.js';
import { Card, Button} from 'react-native-elements';
import Breathing from '../Components/breathing.js';
import {styles} from '../assets/styles'

export default class BoxBreathing extends React.Component {
    constructor(props) {  
      super(props);  
    }
    
    render() {
        return (
            <LessonWrapper intro={this.props.route.params.lesson_content.intro}>
                <View style={[{flex: 1}, styles.container]}>
                <Text style={styles.entry_title}>Box Breathing</Text>
                    <View style={{padding: 30, flex: 1, flexDirection: 'column'}}>
                        <Breathing></Breathing>
                    </View>
                    <View style={{padding: 15, paddingBottom: 60}}>
                    <Button 
                    title="Complete"
                    titleStyle={styles.header}
                    buttonStyle={[styles.primary_button]}
                    onPress={() => this.props.navigation.goBack(null)}>
                    </Button>
                    </View>
                </View>       
            </LessonWrapper>
        );
    }
}