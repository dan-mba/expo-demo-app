import React from 'react';
import { Card, Text, Divider, Chip, Button } from 'react-native-paper';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as WebBrowser from 'expo-web-browser';
import {responsiveFontSize} from '../util/font';
import NavBar from '../components/navbar.component';

const ContactScreen = () => {

  const openBrowser = () => {
    WebBrowser.openBrowserAsync('https://www.linkedin.com/in/danburkhardt')
  }

  const mainFont = responsiveFontSize(20);
  const chipFont = responsiveFontSize(18);

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#006db0'
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#e0e0e0',
    },
    containerContent: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,

    },
    card: {
      width: '90%',
      height: null,
      paddingVertical: 20,
      paddingHorizontal: 10
     },
    content: {
      fontSize: mainFont,
      marginVertical: 15,
    },
    center: {
      alignSelf: 'center',
    },
    image: {
      height: 300,
      width: 300,
      alignSelf: 'center',
      marginBottom: 15,
    },
    chipBox: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 0,
      justifyContent: 'center'
    },
    chip: {
      backgroundColor: '#006db0',
      marginHorizontal: 5,
      marginVertical: 2,
    },
    chipText: {
      color: 'white',
      fontSize: chipFont,
    },
    actions: {
      marginTop: 10,
      justifyContent: 'center',
    },
    actionLabel: {
      fontSize: mainFont,
    }
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <NavBar />
      <Divider />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
        centerContent={true}
      >
        <Card style={styles.card}>
          <Card.Cover source={require('../assets/map.png')} style={styles.image}/>
          <Card.Content>
            <Text style={[styles.center, styles.content]}>
              I currently reside in southern Broward County Florida.
            </Text>
            <Text style={styles.content}>
              I would be interested in hearing about opportunities in South or Central Florida,
              including these markets:
            </Text>
            <View style={styles.chipBox}>
              {['Fort Lauderdale', 'Miami', 'West Palm Beach', 'Fort Myers', 'Tampa', 'Orlando'].map(
                (city) => (
                  <Chip key={city} style={styles.chip} textStyle={styles.chipText}>{city}</Chip>
                ),
              )}
            </View>
          </Card.Content>
          <Card.Actions style={styles.actions}>
            <Button
              labelStyle={styles.actionLabel} 
              onPress={openBrowser}
            >Contact Me on LinkedIn</Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}



export default ContactScreen;
