import React, { useState } from 'react';
import { Card, Divider, Avatar, List, Text } from 'react-native-paper';
import { StyleSheet, SafeAreaView, View, ScrollView } from 'react-native';
import NavBar from '../components/navbar.component';
import {JOBS} from '../data/jobs';
import {responsiveFontSize} from '../util/font';

const Job = ({title, subtitle, employer, description, details, image, styles}) => {
  const [ expanded, setExpanded ] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  const iconSize = responsiveFontSize(60);

  return (
    <Card style={styles.card}>
      <Card.Title
        style={styles.titleContainer}
        titleStyle={styles.title}
        title={title}
        subtitleStyle={styles.title}
        subtitle={employer}
        left={(props) => <Avatar.Image {...{...props, size: iconSize}} source={image} />}
      />
      <Card.Content>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <List.Accordion
          title={description}
          expanded={expanded}
          style={styles.description}
          titleStyle={styles.descriptionTitle}
          titleNumberOfLines={2}
          onPress={() => toggleExpanded()}
        >
          {details.map((detail, index) => {
            if(typeof(detail) === 'string') {
              return (
                <List.Item
                  key={index}
                  title={detail}
                  titleStyle={styles.listItemTitle}
                  titleNumberOfLines={10}
                  style={styles.listItem}
                />
              );
            } else {
              return (
                <List.Item
                  title={detail.title}
                  titleStyle={styles.listItemTitle}
                  key={index}
                  titleNumberOfLines={10}
                  style={styles.listItem}
                  description={() => {
                    return (
                      <View>
                      {detail.list.map((item,index) => (
                        <List.Item
                          key={index}
                          title={item}
                          titleStyle={styles.listItemInnerTitle}
                          titleNumberOfLines={10}
                          style={styles.listItemInner}
                        />
                      ))}
                      </View>
                    )}}
                />
              );
            }
          })}
        </List.Accordion>
      </Card.Content>
    </Card>
  );
}


const ExperienceScreen = () => {
  const titleFont = responsiveFontSize(20);
  const subtitleFont = responsiveFontSize(16);
  const itemFont = responsiveFontSize(14);
  const innerItemFont = responsiveFontSize(13);
  const marginLeft = responsiveFontSize(15, 2.0);
  const padding = Math.max(2,responsiveFontSize(2, 3.0));

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
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    card: {
      width: '90%',
      height: null,
      paddingVertical: 15,
      paddingHorizontal: 10,
      marginVertical: 10,
    },
    titleContainer: {
      paddingBottom: padding,
    },
    title: {
      marginLeft: marginLeft,
      fontSize: titleFont,
      color: 'black',
      paddingVertical: padding,
    },
    subtitle: {
      fontSize: subtitleFont,
    },
    description: {
      paddingVertical: 2,
      paddingHorizontal: 0,
      marginLeft: 0,
    },
    descriptionTitle: {
      fontSize: subtitleFont,
      color: 'black',
    },
    listItem: {
      paddingVertical: 2,
      paddingHorizontal: 0,
    },
    listItemTitle: {
      fontSize: itemFont,
      paddingVertical: 0,
    },
    listItemInner: {
      paddingVertical: 0,
    },
    listItemInnerTitle: {
      fontSize: innerItemFont,
    }
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <NavBar />
      <Divider />
      <ScrollView style={styles.container} contentContainerStyle={styles.containerContent}>
        {JOBS.map((job, index) => <Job {...job} styles={styles} key={index} />)}
      </ScrollView>
    </SafeAreaView>
  );
}


export default ExperienceScreen;
