import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home.component';
import ContactScreen from '../screens/contact.component';
import ExperienceScreen from '../screens/experience.component';
import EducationScreen from '../screens/education.component';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Home' component={HomeScreen}/>
    <Stack.Screen name='Contact' component={ContactScreen}/>
    <Stack.Screen name='Experience' component={ExperienceScreen}/>
    <Stack.Screen name='Education' component={EducationScreen}/>
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);

export default AppNavigator;
