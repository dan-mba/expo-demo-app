import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Test app built using Expo.</Text>
      <Button
        title="Visit Expo Site"
        onPress={openBrowser}
      />
    </View>
  );
}

function openBrowser() {
  WebBrowser.openBrowserAsync('https://expo.io')
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#111',
  }
});
