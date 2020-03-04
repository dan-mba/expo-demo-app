import React from 'react';
import { Button, Text, Divider, Surface, withTheme } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import * as WebBrowser from 'expo-web-browser';
import NavBar from '../components/navbar.component'
import {responsiveFontSize} from '../util/font'


const HomeScreen = ({theme: {colors}}) => {
  const mainFont = responsiveFontSize(16);
  const linkFont = responsiveFontSize(13);
  

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
    paper: {
      width: '95%',
      margin: 10,
      paddingVertical: 10,
      paddingHorizontal: '2%'
    },
    text: {
       marginBottom: 10,
       fontSize: mainFont
    },
    link: {
      color: colors.primary
    },
    center: {
      alignSelf: 'center'
    },
    buttonBar: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignSelf: 'center'
    },
    button: {
      flexBasis: '50%'

    },
    buttonContent: {
      alignSelf: 'flex-start',
      paddingHorizontal: 0
    },
    buttonLabel: {
      fontSize: linkFont,
      marginHorizontal: 0
    }
  });

  const openBrowser = (link) => {
    WebBrowser.openBrowserAsync(link)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <NavBar />
      <Divider />
      <View style={styles.container}>
        <Surface style={styles.paper}>
          <Text style={styles.text}>
            I built this app to learn how to translate an existing React website to React Native. 
            This app has a similar design to parts of my 
            <Text
              style={styles.link}
              onPress={() => openBrowser('https://dan-mba.github.io')}
            > GitHub portfolio </Text>
            site. Many of the differences are due to tradeoffs required by React Native and the 
            component libraries available for the web compared to native.
          </Text>
          <Text style={[styles.text, styles.center]}>
            This app uses the following libraries:
          </Text>
          <View style={styles.buttonBar}>
            <Button
              style={styles.button}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonLabel}
              icon='caret-right'
              uppercase={false}
              onPress={() => openBrowser('https://expo.io')}
            >Expo</Button>
            <Button
              style={styles.button}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonLabel}
              icon='caret-right'
              uppercase={false}
              onPress={() => openBrowser('https://reactnavigation.org')}
            >React Navigation</Button>
            <Button
              style={styles.button}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonLabel}
              icon='caret-right'
              uppercase={false}
              onPress={() => openBrowser('https://reactnative.dev')}
            >React Native</Button>
            <Button
              style={styles.button}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonLabel}
              icon='caret-right'
              uppercase={false}
              onPress={() => openBrowser('https://callstack.github.io/react-native-paper/')}
            >React Native Paper</Button>
          </View>
        </Surface>
      </View>
    </SafeAreaView>
  );
}


export default withTheme(HomeScreen);
