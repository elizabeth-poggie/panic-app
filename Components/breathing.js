
import React, { useRef, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Animated,
    Easing,
  } from 'react-native'
  import { Card, Button, CheckBox} from 'react-native-elements';
var width = 200;
var height = 200;
var SQUARE_DIMENSIONS = 30;
var side_duration = 5000;
var fade_duration = 2000;
var delay_duration = 1000;

export default class BoxBreathing extends React.Component {
    constructor(props) {  
      super(props);  
      this.state = {
        pan: new Animated.ValueXY(),
        fadeIn: new Animated.Value(0),
        fadeBreathIn: new Animated.Value(0),
        fadeBreathOut: new Animated.Value(0),
      }
      this.triggerAnimation = this.triggerAnimation.bind(this)
      this.startAndRepeat = this.startAndRepeat.bind(this)
      this.fadeIn = this.fadeIn.bind(this);
      this.fadeOut = this.fadeOut.bind(this);
      this.fadeInBreathIn = this.fadeInBreathIn.bind(this);
      this.fadeOutBreathIn = this.fadeOutBreathIn.bind(this);
      this.fadeOutHold = this.fadeOutHold.bind(this);
      this.fadeInHold = this.fadeInHold.bind(this);
      this.fadeInBreathOut = this.fadeInBreathOut.bind(this);
      this.fadeOutBreathOut = this.fadeOutBreathOut.bind(this);
    }

    componentDidMount() {
        this.startAndRepeat();
        this.fadeInBreathIn();
    }

    startAndRepeat() {
        this.triggerAnimation(this.startAndRepeat); // for box
    }

    triggerAnimation(cb) {
        Animated.sequence([
            Animated.timing(this.state.pan, {
                duration: side_duration,
                easing: Easing.linear,
                toValue: {x: 0, y: height - SQUARE_DIMENSIONS} //animate to bottom left
            }),
            Animated.timing(this.state.pan, {
                duration: side_duration,
                easing: Easing.linear,
                toValue: {x: width - SQUARE_DIMENSIONS, y: height - SQUARE_DIMENSIONS} // animated to bottom right
            }),
            Animated.timing(this.state.pan, {
                duration: side_duration,
                easing: Easing.linear,
                toValue: {x: width - SQUARE_DIMENSIONS, y: 0} //animate to top right
            }),
            Animated.timing(this.state.pan, {
                duration: side_duration,
                easing: Easing.linear,
                toValue: {x: 0, y: 0} // return to start
            })
          ]).start(cb);
    }

    getStyle() {
        return [
            styles.square, 
            {
              transform: this.state.pan.getTranslateTransform()
            }
          ];
    }

    fadeIn() {
      this.state.fadeIn.setValue(0)                  
      Animated.timing(
        this.state.fadeIn,           
        {
          toValue: 1,                   
          duration: fade_duration,              
        }
      ).start(() => this.fadeOut());                        
    }

    fadeOut() {
      Animated.timing(                  
         this.state.fadeIn,            
         {
           toValue: 0,     
           delay: delay_duration,              
           duration: fade_duration,              
         }
      ).start(() => this.fadeInBreathIn());                        
    }

    fadeInBreathIn() {
      this.state.fadeBreathIn.setValue(0)                  
      Animated.timing(
        this.state.fadeBreathIn,           
        {
          toValue: 1,                   
          duration: fade_duration,               
        }
      ).start(() => this.fadeOutBreathIn());   
    }

    fadeOutBreathIn() {
      Animated.timing(                  
        this.state.fadeBreathIn,            
        {
          toValue: 0,                   
          delay: delay_duration,              
          duration: fade_duration,              
        }
     ).start(() => this.fadeInHold()); 
    }

    fadeInHold() {
      this.state.fadeIn.setValue(0)                  
      Animated.timing(
        this.state.fadeIn,           
        {
          toValue: 1,                   
          duration: fade_duration,              
        }
      ).start(() => this.fadeOutHold());                        
    }

    fadeOutHold() {
      Animated.timing(                  
         this.state.fadeIn,            
         {
           toValue: 0,                   
           delay: delay_duration,              
           duration: fade_duration,             
         }
      ).start(() => this.fadeInBreathOut());                        
    }

    fadeInBreathOut() {
      this.state.fadeBreathOut.setValue(0)                  
      Animated.timing(
        this.state.fadeBreathOut,           
        {
          toValue: 1,                   
          duration: fade_duration,               
        }
      ).start(() => this.fadeOutBreathOut());   
    }

    fadeOutBreathOut() {
      Animated.timing(                  
        this.state.fadeBreathOut,            
        {
          toValue: 0,                   
          delay: delay_duration,              
          duration: fade_duration,              
        }
     ).start(() => this.fadeIn());  // Loop back at start 
    }

    render() {
        return (
          <> 
          <View style={styles.center}>
          <Animated.View style={styles.holdleft, {opacity: this.state.fadeIn}}>
                <Text style={{fontSize: 20, textAlign: 'center', margin: 10}}>Hold</Text>
           </Animated.View>
          </View>

          <View style={styles.center}>
          <Animated.View style={styles.holdleft, {opacity: this.state.fadeBreathIn}}>
                <Text style={{fontSize: 20, textAlign: 'center', margin: 10}}>Breath In</Text>
           </Animated.View>
          </View>

          <View style={styles.center}>
          <Animated.View style={styles.holdleft, {opacity: this.state.fadeBreathOut}}>
                <Text style={{fontSize: 20, textAlign: 'center', margin: 10}}>Breath Out</Text>
           </Animated.View>
          </View>
            
            <View style={styles.container}>
              <Animated.View style={this.getStyle()} />
            </View>
          </>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    top: -height, 
    left: -width, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  square: {
    width: SQUARE_DIMENSIONS,
    height: SQUARE_DIMENSIONS,
    backgroundColor: 'black'
  },
  breathin: {

  },
  breathout: {

  },
  center: {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'
  }, 
  holdleft: {
    width: 250, height: 50, backgroundColor: 'powderblue',
 
  }
});

// AppRegistry.registerComponent('Breathing', () => AnimatedSquare);
