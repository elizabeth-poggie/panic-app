import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home.js';
import CBT from './Lessons/CBT.js';
import Entry from './Journal/Entry.js'
import Journal from './Journal/Journal.js';
import { createStackNavigator } from '@react-navigation/stack';
import SelfCareBuckets from './Lessons/SelfCareBuckets.js';
import BoxBreathing from './Lessons/BoxBreathing.js';
import * as Font from 'expo-font';
import { Icon} from 'react-native-elements';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/* to stylize this go here https://reactnavigation.org/docs/tab-based-navigation/ */


export default class Root extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      'title_font': require('./assets/fonts/Montserrat-Bold.otf'),
      'header_font': require('./assets/fonts/Montserrat-Regular.otf'),
      'paragraph_font': require('./assets/fonts/Montserrat-Thin.otf'),
    });
  }
  
  render() {
    return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Lessons') {
            iconName = 'seedling';
          } else if (route.name === 'Journal') {
            iconName = 'book-open';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} type='font-awesome-5' size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#fe8e66',
        inactiveTintColor: 'black',
        showLabel: false,
      }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Lessons" component={CBT} />
        <Tab.Screen name="Journal" component={Journal} />
        <Tab.Screen name="Entry" component={Entry} options={{ tabBarButton: () => null, tabBarVisible: false }} />
        <Tab.Screen name="Self Care Buckets" component={SelfCareBuckets} options={{ tabBarButton: () => null, tabBarVisible: false }}/>
        <Tab.Screen name="Box Breathing" component={BoxBreathing} options={{ tabBarButton: () => null, tabBarVisible: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
    );
  }
}






