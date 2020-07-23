import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import DynamicInputField from '../Components/DynamicInputField.js';
import LessonWrapper from '../Components/LessonWrapper.js';
import { Card, Button} from 'react-native-elements';
import Breathing from '../Components/breathing.js';

export default class BoxBreathing extends React.Component {
    constructor(props) {  
      super(props);  
    }
    
    render() {
        return (
            <LessonWrapper intro={this.props.route.params.lesson_content.intro}>
                <View style={{flex: 1}}>
                    <View style={{padding: 30, flex: 1, flexDirection: 'column'}}>
                        <Breathing></Breathing>
                    </View>
                    <Button 
                    title="Finished" 
                    onPress={() => this.props.navigation.goBack(null)}
                    style={{padding:30, marginBottom: 70}}
                    />
                </View>       
            </LessonWrapper>
        );
    }
}