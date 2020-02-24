import React from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/material';
import { FAIconsPack } from './components/fa-icons';
import AppNavigator from './components/navigation.component';
import { default as appTheme } from './custom-theme.json';

const theme = { ...lightTheme, ...appTheme };

export default function App() {
  return (
    <React.Fragment>
      <IconRegistry icons={FAIconsPack} />
      <ApplicationProvider mapping={mapping} theme={theme}>
        <AppNavigator />
      </ApplicationProvider>
    </React.Fragment>
  );
}
