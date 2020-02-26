/* eslint react/display-name: [0] */
import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { FontAwesome } from '@expo/vector-icons';
import AppNavigator from './components/navigation.component';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#006db0',
    background: '#e0e0e0',
    surface: '#dbe3e8',
    backdrop: '#e0e0e0',
  }
};

export default function App() {
  return (
    <PaperProvider
      settings={{
        icon: props => <FontAwesome {...props} />, 
      }}
      theme={theme}
    >
      <AppNavigator />
    </PaperProvider>
  );
}
