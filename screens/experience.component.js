import React, { useState } from 'react';
import { Card, Text, Divider, Avatar, List } from 'react-native-paper';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import NavBar from '../components/navbar.component'


const ExperienceScreen = () => {
  const [ expanded, setExpanded ] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavBar />
      <Divider />
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Title
            titleStyle={styles.title}
            title="Private Consultant"
            subtitleStyle={styles.subtitle}
            subtitle={<Text>Miramar, FL &bull; January 2018 - Present</Text>}
            left={(props) => <Avatar.Image {...{...props, size: 64}} source={require('../assets/code.png')} />}
          />
          <Card.Content>
            <List.Accordion
              title="Freelance Quickbase & Web Developer"
              expanded={expanded}
              onPress={() => toggleExpanded()}
            >
              <List.Item title="Item1"/>
              <List.Item title="Item2" 
                description={() => (
                  <View>
                    <List.Item title="sub1" />
                    <List.Item title="sub2" />
                  </View>
                )}
              />
            </List.Accordion>
          </Card.Content>
        </Card>
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
  card: {
    width: '90%',
    height: null,
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
  title: {
    marginLeft: 40,
    fontSize: 24,
  },
  subtitle: {
    marginLeft: 40,
    fontSize: 18,
  }
});

export default ExperienceScreen;
