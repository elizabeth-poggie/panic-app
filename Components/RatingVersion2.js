import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, ButtonGroup } from 'react-native-elements';
import {styles} from '../assets/styles'


export default class RatingVersion2 extends React.Component {
    
    constructor (props) {
        super(props)
        this.state = {
          selectedIndex: 2, 
        
        component0: () => <Image
        source={require('../assets/rating/0.png')}
        style={styles.rating_icon}/>,
        component0selected: () => <Image
        source={require('../assets/rating/0s.png')}
        style={styles.rating_icon}/>,
        component0dead: () => <Image
        source={require('../assets/rating/0.png')}
        style={styles.rating_icon}/>,
        

        component1: () => <Image
        source={require('../assets/rating/1.png')}
        style={styles.rating_icon}/>,
        component1selected: () => <Image
        source={require('../assets/rating/1s.png')}
        style={styles.rating_icon}/>,
        component1dead: () => <Image
        source={require('../assets/rating/1.png')}
        style={styles.rating_icon}/>,

        component2: () => <Image
        source={require('../assets/rating/2.png')}
        style={styles.rating_icon}/>,
        component2selected: () => <Image
        source={require('../assets/rating/2s.png')}
        style={styles.rating_icon}/>,
        component2dead: () => <Image
        source={require('../assets/rating/2.png')}
        style={styles.rating_icon}/>,

        component3: () => <Image
        source={require('../assets/rating/3.png')}
        style={styles.rating_icon}/>,
        component3selected: () => <Image
        source={require('../assets/rating/3s.png')}
        style={styles.rating_icon}/>,
        component3dead: () => <Image
        source={require('../assets/rating/3.png')}
        style={styles.rating_icon}/>,

        component4: () => <Image
        source={require('../assets/rating/4.png')}
        style={styles.rating_icon}/>,
        component4selected: () => <Image
        source={require('../assets/rating/4s.png')}
        style={styles.rating_icon}/>,
        component4dead: () => <Image
        source={require('../assets/rating/4.png')}
        style={styles.rating_icon}/>,
        }
        this.updateIndex = this.updateIndex.bind(this)
      }
      
      updateIndex (selectedIndex) {
        this.setState({selectedIndex});
        if (selectedIndex == 0) {
          this.setState({component0: this.state.component0selected})
          this.setState({component1: this.state.component1dead})
          this.setState({component2: this.state.component2dead})
          this.setState({component3: this.state.component3dead})
          this.setState({component4: this.state.component4dead})
        } else if (selectedIndex == 1) {
          this.setState({component1: this.state.component1selected})
          this.setState({component0: this.state.component0dead})
          this.setState({component2: this.state.component2dead})
          this.setState({component3: this.state.component3dead})
          this.setState({component4: this.state.component4dead})
        } else if (selectedIndex == 2) {
          this.setState({component2: this.state.component2selected})
          this.setState({component1: this.state.component1dead})
          this.setState({component0: this.state.component0dead})
          this.setState({component3: this.state.component3dead})
          this.setState({component4: this.state.component4dead})
        } else if (selectedIndex == 3) {
          this.setState({component3: this.state.component3selected})
          this.setState({component1: this.state.component1dead})
          this.setState({component2: this.state.component2dead})
          this.setState({component0: this.state.component0dead})
          this.setState({component4: this.state.component4dead})
        } else if (selectedIndex == 4) {
          this.setState({component4: this.state.component4selected})
          this.setState({component1: this.state.component1dead})
          this.setState({component2: this.state.component2dead})
          this.setState({component3: this.state.component3dead})
          this.setState({component0: this.state.component0dead})
        }
        // now navigate
        this.props.navigation.navigate('Entry',{index: selectedIndex})
      }
      
      render () {
        const buttons = [{ element: this.state.component0 }, { element: this.state.component1 }, { element: this.state.component2 }, { element: this.state.component3 }, { element: this.state.component4 }]
        const { selectedIndex } = this.state
      
        return (
          <ButtonGroup
            selectedIndex={selectedIndex}
            buttons={buttons}
            onPress={this.updateIndex}
            containerBorderRadius={0}
            containerStyle={{height: 80, padding: 11, borderWidth: 0, borderRadius: 0, borderRightWidth: 0}}
            innerBorderStyle={{width: 0, color: 'white'}}
            selectedButtonStyle={{backgroundColor: undefined}}
          />
        )
      }
}