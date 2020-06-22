
import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ScrollView
} from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet';
import DynamicInputField from './DynamicInputField.js';

class Core extends React.Component {
  constructor(props) {  
    super(props);  
    this.render = this.render.bind(this);
    this.lesson = [
      {
        title:"How do you fill your Social Bucket?",
        details:"This has to do with people around you, and the connections that you have with them. For example, how do you connect with other people and how do you disconnect when social interactions are getting too much?",
        example_activity: "Texting a friend",
        data: [
          {
            id: 0,
            title: ''
          }
        ],
      },
      {
        title:"How do you fill your Physical Bucket?",
        details: "This bucket is primarily focused on physical activity, nutrition, and rest/sleep. For ezample, how are you physically active several times a week? How do you relax?",
        example_activity: "Taking a walk",
        data: [
          {
            id: 0,
            title: ''
          }
        ],
      },
      {
        title:"How do you fill your Emotional Bucket?",
        details: "The important part of this bucket is to ensure that you are giving yourself space and permission to feel a range of emotions–both ‘positive’ and ‘negative’. How do you ensure that you laugh? How do you let yourself worry?",
        example_activity: "Planning ‘Worry Time’",
        data: [
          {
            id: 0,
            title: ''
          }
        ],
      },
      {
        title:"How do you fill your Mental Bucket?",
        details: "The Mental bucket is about both activating and relaxing your brain. This does not include school, your job, or homework. How can you exercise your brain, for example doing puzzles or learning a language? How do you relax your thinking?",
        example_activity: "Trying a new recipe",
        data: [
          {
            id: 0,
            title: ''
          }
        ],
      },
      {
        title:"How do you fill your Spiritual Bucket?",
        details: "The Spiritual bucket is about recognizing things outside of yourself and your own day-to-day life. For example, how do you give yourself 'you time' to recognize what matters most? How do you recognize things outside yourself?",
        example_activity: "Eating Doritos just cause",
        data: [
          {
            id: 0,
            title: ''
          }
        ],
      }
    ]
  }
  
  render() {
    return (
        <ScrollView style={{zIndex: 0}} >
          { this.lesson.map((item) => {
            return (
              <DynamicInputField details={item.details} title={item.title} example_activity={item.example_activity} data={item.data}/>
            );
        })}
        </ScrollView>
    );
  }
}

export default class Example extends React.Component {
  renderInner = () => (
    <View style={styles.panel}>
      <Text style={styles.panelSubtitle}>
      Self Care underlies healthy living in general, and it is particularly relevant for your mental health. For this reason, we’ve put this section before all other Basic Skills—ideally, you should check-in with your current Self Care and establish new, healthy Self Care habits before attempting any other Basic Skills. You won’t become a world-class skater without first buying a pair of skates—and you wouldn’t get to be very good if those skates were made of wood! Similarly, the Basic Skills and other techniques found in this workbook require a solid foundation; in this case the bedrock of anxiety management is Self Care.
      </Text>
      <View style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Skip Intro</Text>
      </View>
      
    </View>
  )

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
        <Text>Before you Begin</Text>
      </View>
    </View>
  )

  bs = React.createRef()

  render() {
    return (
      <View style={styles.container}>
        <BottomSheet
          ref={this.bs}
          snapPoints={[420, 80, 80]}
          renderContent={this.renderInner}
          renderHeader={this.renderHeader}
          initialSnap={1}
        />
        <TouchableWithoutFeedback onPress={() => this.bs.current.snapTo(0)}>
          <Core/>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const IMAGE_SIZE = 200

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    zIndex: 1
  },
  box: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  panel: {
    height: 600,
    padding: 20,
    backgroundColor: '#f7f5eee8',
  },
  header: {
    backgroundColor: '#f7f5eee8',
    shadowColor: '#000000',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#318bfb',
    alignItems: 'center',
    marginVertical: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  photo: {
    width: '100%',
    height: 225,
    marginTop: 30,
  },
  map: {
    height: '100%',
    width: '100%',
  },
})