import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Calendar, LocaleConfig, CalendarList, Agenda} from 'react-native-calendars';
import { Card, Button, ListItem, Icon } from 'react-native-elements';

LocaleConfig.locales['fr'] = {
    monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
    dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
    today: 'Aujourd\'hui'
  };

// if i need to change the language
// LocaleConfig.defaultLocale = 'fr';

export default function Journal({ navigation }) {
    return (
      <View>
        <Card>
        <Calendar
            // Initially visible month. Default = Date()
            current={'2020-06-01'}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={'2020-01-01'}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={'2020-12-30'}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={(day) => {console.log('selected day', day)}}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={(day) => {console.log('selected day', day)}}
            />
        </Card>
        <Card>
            <Text>Journal entries go here</Text>
        </Card>
      </View>
    );
}