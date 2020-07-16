
import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, View, ScrollView} from 'react-native';
import { Card, Button, CheckBox} from 'react-native-elements';
import RatingVersion2 from '../Components/RatingVersion2.js'

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  render() {
    return (
      <CheckBox
        title={this.props.title}
        checked={this.state.checked}
        onPress={() => this.setState({checked: !this.state.checked})}
      />
    );
  }
}

export default function Entry({ route, navigation }) {
    const [value, onChangeText] = React.useState('');
    const workbook = require('../Workbook.js');
    console.log(workbook[0]["lessons"][0].lesson_content.lesson[0].title)
    return (
      <ScrollView>
        <Card title="What did you do for yourself today?"></Card>
        <Card>
          <RatingVersion2 navigation={navigation} index={route.params.index}/>
        </Card>
        {workbook[0]["lessons"][0].lesson_content.lesson.map((item) => {
          return (
            <Card title={item.category}>
              {item.data.map((item) => {
                return(
                  <Box title={item.title}/>
                );
              })}
            </Card>
          );
          })}
        
        <Card>
            <TextInput
            style={{height: 100}}
            placeholder="What's on your mind?"
            onChangeText={text => onChangeText(text)}
            value={value}
            multiline={true}
            />
            
        </Card>
        <Card> 
          <Button 
          title="Edit Buckets" 
          type="outline"
          onPress={() => navigation.navigate( 'Lessons', { screen: workbook[0]["lessons"][0].lesson_component, params: {lesson_content: workbook[0]["lessons"][0].lesson_content}})}>
          </Button>
        </Card>

        <Card>
          <Button 
          title="Submit"
          onPress={() => {navigation.navigate('Journal', { screen: 'Entries', params: {textinput: value}}); console.log(value)}}>
          </Button>
        </Card>
      </ScrollView>
    );
}