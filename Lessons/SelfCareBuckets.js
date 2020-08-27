
import React from 'react';
import {ScrollView, View} from 'react-native';
import DynamicInputField from '../Components/DynamicInputField.js';
import LessonWrapper from '../Components/LessonWrapper.js';
import { Card, Button, Text} from 'react-native-elements';
import {styles} from '../assets/styles'

export default class SelfCareBuckets extends React.Component {
  constructor(props) {  
    super(props);  
  }
  
  render() {
    console.log(this.props.route.params.lesson_content.intro);
    return (
      <LessonWrapper intro={this.props.route.params.lesson_content.intro}>
        <ScrollView style={styles.lesson_container} showsHorizontalScrollIndicator={false}>
          <Text style={styles.entry_title}>Self Care Buckets</Text>
          { this.props.route.params.lesson_content.lesson.map((item) => {
            return (
              <DynamicInputField details={item.details} title={item.title} example_activity={item.example_activity} data={item.data}/>
            );
        })}
        <View style={{padding: 15, paddingBottom: 110}}>
          <Button 
          title="Submit"
          titleStyle={styles.header}
          buttonStyle={[styles.primary_button]}
          onPress={() => this.props.navigation.goBack(null)}>
          </Button>
        </View>
        </ScrollView>
      </LessonWrapper>
    );
  }
}
