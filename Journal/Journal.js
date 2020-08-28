import React, {useState, Component} from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Calendar, LocaleConfig, CalendarList, Agenda} from 'react-native-calendars';
import { Card, Button, ListItem, Icon, Overlay } from 'react-native-elements';
import {styles} from '../assets/styles'

const testIDs = {
  menu: {
    CONTAINER: 'menu',
    CALENDARS: 'calendars_btn',
    CALENDAR_LIST: 'calendar_list_btn',
    HORIZONTAL_LIST: 'horizontal_list_btn',
    AGENDA: 'agenda_btn',
    EXPANDABLE_CALENDAR: 'expandable_calendar_btn',
    WEEK_CALENDAR: 'week_calendar_btn'
  },
  calendars: {
    CONTAINER: 'calendars',
    FIRST: 'first_calendar',
    LAST: 'last_calendar'
  },
  calendarList: {CONTAINER: 'calendarList'},
  horizontalList: {CONTAINER: 'horizontalList'},
  agenda: {
    CONTAINER: 'agenda',
    ITEM: 'item'
  },
  expandableCalendar: {CONTAINER: 'expandableCalendar'},
  weekCalendar: {CONTAINER: 'weekCalendar'}
};

const entries = [
  {
    date: '2020-07-05',
    mood_index: ':|',
    acivities_completed: [],
    name: 'I just ate chips all day',
    activities: [
      {
        category: "Emotional",
        name: "Eating chips"
      },
      {
        category: "Social",
        name: "Texting Homies"
      },
    ]
  }
];

export default class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      isVisible: false 
    };
    this.overlay = this.overlay.bind(this)
  }

  overlay() {
    <Overlay
      isVisible={this.state.isVisible}
      onBackdropPress={() => this.setState({ isVisible: false })}
    >
      <Text>Are you sure you want to delete?</Text>
    </Overlay>
  }

  render() {
    return (
      <Agenda
        testID={testIDs.agenda.CONTAINER}
        items={this.state.items}
        style={styles.header}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={this.timeToString('2020-07-05')} //Date.now()
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        theme={{selectedDayBackgroundColor: '#fe8e66'}}
      />
    );
  }

  loadItems(day) {
    setTimeout(() => {
      entries.map((entry) => {
        const strTime = entry.date;
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          this.state.items[strTime].push(entry);
        }
      })
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
  }

  // <Text style={{width: 36, height: 50, backgroundColor: 'powderblue', padding: 14}}>{item.mood_index}</Text>
  renderItem(item) {
    return (
      <View style={[styles.item]}>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
            stlye={{flex: 1, flexDirection: 'row'}}
            testID={testIDs.agenda.ITEM}   
            onPress={() => this.props.navigation.navigate('Journal', { screen: 'Entry', params: {index: item.mood_index}})}
            >
            <View>
            
            <View style={{paddingLeft: 10}}>
            <Text style={styles.header}>{item.name}</Text>
              {item.activities.map((activity) => {
                return (
                  <Text style={[styles.paragraph, {color: 'gray'}]}>{activity.name}</Text>
                );
              })}
            </View>
            </View>
            
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.secondary_button, styles.edit_button_location, {padding: 10, marginVertical: 10}]}
            >
            <Icon name='trash'
              type='font-awesome-5'  
              size={24} 
              color='#fe8e66' />
            </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}
