
import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet'
import { Card, Button, AirbnbRating } from 'react-native-elements';
import DynamicInputField from './DynamicInputField.js';

class Core extends React.Component {
  render() {
    return (
      <View style={{zIndex: 0}} >
        <Card title="How do you fill your Social Bucket?"> 
          <Text style={styles.panelHeader}>This has to do with people around you, and the connections that you have with them. For example, How do you connect with other people and how do you disconnect when social interactions are getting too much? </Text>
        </Card>
        <DynamicInputField/>
      </View>
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