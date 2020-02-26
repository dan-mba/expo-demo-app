import React from 'react';
import { Card, Text, Divider, Chip, Button } from 'react-native-paper';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import NavBar from '../components/navbar.component'

const ContactScreen = () => {

  const openBrowser = () => {
    WebBrowser.openBrowserAsync('https://www.linkedin.com/in/danburkhardt')
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavBar />
      <Divider />
      <View style={styles.container}>
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
            <Button onPress={openBrowser}>Contact Me on LinkedIn</Button>
          </Card.Actions>
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '90%',
    height: null,
    paddingVertical: 40,
    paddingHorizontal: 10
   },
  content: {
    fontSize: 18,
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
    flex: 0,
    justifyContent: 'center'
  },
  chip: {
    backgroundColor: '#006db0',
     marginHorizontal: 5,
  },
  chipText: {
    color: 'white',
  },
  actions: {
    marginTop: 10,
    justifyContent: 'center',
  }
});

export default ContactScreen;
