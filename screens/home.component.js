import React from 'react';
import { Button, Text, Divider } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import * as WebBrowser from 'expo-web-browser';
import NavBar from '../components/navbar.component'


const HomeScreen = () => {

  const openBrowser = () => {
    WebBrowser.openBrowserAsync('https://expo.io')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
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
  safeArea: {
    flex: 1,
    backgroundColor: '#006db0'
  },
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
