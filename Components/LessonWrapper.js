import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet';

export default class LessonWrapper extends React.Component {
    constructor(props) {
      super(props);
    }
  
    renderInner = () => (
      <View style={styles.panel}>
        <Text style={[styles.panelHeader, {paddingBottom: 10}]}>Before you Begin</Text>
        <Text style={styles.paragraph}>
        {this.props.intro}
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
        </View>
      </View>
    )
  
    bs = React.createRef()
  
    render() {
      return (
        
        <View style={styles.container}>
          <BottomSheet
            ref={this.bs}
            snapPoints={[580, 50, 50]}
            renderContent={this.renderInner}
            renderHeader={this.renderHeader}
            initialSnap={1}
          />
          <TouchableWithoutFeedback onPress={() => this.bs.current.snapTo(0)}>
            {this.props.children}
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
      zIndex: 1,
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
      backgroundColor: 'white',
    },
    header: {
      backgroundColor: 'white',
      shadowColor: '#000000',
      paddingTop: 20,
      borderColor: 'rgba(0,0,0,0.2)',
      borderTopWidth: 2,
      borderLeftWidth:2, 
      borderRightWidth: 2,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
      fontFamily: 'title_font',
        fontSize: 30,
        marginBottom: 0,
        color: 'black',
        fontWeight: 'normal',
        textAlign: 'left',
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
    paragraph: {
      fontFamily: 'header_font',
        fontSize: 16,
        fontWeight: 'normal',
        paddingBottom: 10,
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