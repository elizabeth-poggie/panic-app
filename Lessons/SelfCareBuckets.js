
import React from 'react';
import {ScrollView} from 'react-native';
import DynamicInputField from '../Components/DynamicInputField.js';
import LessonWrapper from '../Components/LessonWrapper.js'

export default class SelfCareBuckets extends React.Component {
  constructor(props) {  
    super(props);  
  }
  
  render() {
    return (
      <LessonWrapper intro={this.props.route.params.lesson_content.intro}>
        <ScrollView style={{zIndex: 0}} >
          { this.props.route.params.lesson_content.lesson.map((item) => {
            return (
              <DynamicInputField details={item.details} title={item.title} example_activity={item.example_activity} data={item.data}/>
            );
        })}
        </ScrollView>
      </LessonWrapper>
    );
  }
}
