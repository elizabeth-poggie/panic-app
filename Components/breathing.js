
import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
    Animated,
    Easing
  } from 'react-native'

var width = 200;
var height = 200;
var SQUARE_DIMENSIONS = 30;

export default class BoxBreathing extends React.Component {
    constructor(props) {  
      super(props);  
      this.state = {
        pan: new Animated.ValueXY()
      }
      this.triggerAnimation = this.triggerAnimation.bind(this)
      this.startAndRepeat = this.startAndRepeat.bind(this)
    }

    componentDidMount() {
        this.startAndRepeat();
    }

    startAndRepeat() {
        this.triggerAnimation(this.startAndRepeat);
    }

    triggerAnimation(cb) {
        Animated.sequence([
            Animated.timing(this.state.pan, {
                duration: 5000,
                easing: Easing.linear,
                toValue: {x: 0, y: height - SQUARE_DIMENSIONS} //animate to bottom left
            }),
            Animated.timing(this.state.pan, {
                duration: 5000,
                easing: Easing.linear,
                toValue: {x: width - SQUARE_DIMENSIONS, y: height - SQUARE_DIMENSIONS} // animated to bottom right
            }),
            Animated.timing(this.state.pan, {
                duration: 5000,
                easing: Easing.linear,
                toValue: {x: width - SQUARE_DIMENSIONS, y: 0} //animate to top right
            }),
            Animated.timing(this.state.pan, {
                duration: 5000,
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

    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={this.getStyle()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  square: {
    width: SQUARE_DIMENSIONS,
    height: SQUARE_DIMENSIONS,
    backgroundColor: 'blue'
  } 
});

// AppRegistry.registerComponent('Breathing', () => AnimatedSquare);
