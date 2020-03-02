import React from 'react';
import { Card, Text, Divider, Button } from 'react-native-paper';
import { StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as WebBrowser from 'expo-web-browser';
import {responsiveFontSize} from '../util/font';
import NavBar from '../components/navbar.component';
import { SCHOOLS } from '../data/schools';

const School = ({ styles, university, degree, subject, location, date, link, image }) => {
  const openBrowser = (inputLink) => {
    WebBrowser.openBrowserAsync(inputLink)
  }
  
  return (
    <Card style={styles.card}>
      <Card.Cover source={image} style={styles.image}/>
      <Card.Content>
        <Text style={[styles.bold, styles.content]}>
          {`${degree}\n${subject}`}
        </Text>
        <Text style={[styles.bold, styles.content]}>
          {university}
        </Text>
        <Text style={styles.content}>
          {`${location}\n${date}`}
        </Text>
      </Card.Content>
      <Card.Actions compact={true} style={styles.actions}>
        <Button
          labelStyle={styles.actionLabel}
          onPress={() => openBrowser(link)}
        >{`${university} Website`}</Button>
      </Card.Actions>
    </Card>
  );
}


const EducationScreen = () => {


  const mainFont = responsiveFontSize(20);
  const linkFont = responsiveFontSize(15);

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#006db0'
    },
    container: {
      flex: 1,
      backgroundColor: '#e0e0e0',
    },
    containerContent: {
      justifyContent: 'center',
      paddingVertical: 15,

    },
    card: {
      width: '90%',
      height: null,
      alignSelf: 'center',
      paddingVertical: 20,
      paddingHorizontal: 10,
      marginVertical: 10,
     },
    content: {
      fontSize: mainFont,
      marginVertical: 3,
      alignSelf: 'center',
      textAlign: 'center'
    },
    bold: {
      fontWeight: '500'
    },
    image: {
      height: 200,
      width: 200,
      alignSelf: 'center',
      marginBottom: 15,
    },
    actions: {
      marginTop: 5,
      justifyContent: 'center',
    },
    actionLabel: {
      fontSize: linkFont
    }
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <NavBar />
      <Divider />
      <FlatList
        data={SCHOOLS}
        renderItem={({item}) => <School {...item} styles={styles}/>}
        keyExtractor={(item) => item.university}
        style={styles.container}
        contentContainerStyle={styles.containerContent}
        centerContent={true}
      />
    </SafeAreaView>
  );
}



export default EducationScreen;
