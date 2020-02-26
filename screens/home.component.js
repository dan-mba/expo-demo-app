import React from 'react';
import { Button, Text, Divider } from 'react-native-paper';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import NavBar from '../components/navbar.component'


const HomeScreen = () => {

  const openBrowser = () => {
    WebBrowser.openBrowserAsync('https://expo.io')
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavBar />
      <Divider />
      <View style={styles.container}>
        <Text style={styles.text} category='s1'>Test app built using Expo.</Text>
        <Button onPress={openBrowser}>Visit Expo Site</Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 10,
  }
});

export default HomeScreen;
