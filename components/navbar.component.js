import React from 'react';
import { Appbar, Menu } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import {responsiveFontSize} from '../util/font'

const NavBar = () => {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const navigation = useNavigation();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const openBrowser = () => {
    WebBrowser.openBrowserAsync('https://www.linkedin.com/in/danburkhardt');
  }

  const onMenuItemSelect = (index) => {
    navigation.navigate(index);

    setMenuVisible(false);
  };

  const menuIcon = (name) => (props) => <FontAwesome name={name} {...props} />;

  const fontSize = responsiveFontSize(32, 1.0);

  const styles = StyleSheet.create({
    top: {
      height: null,
      width: '100%'
    },
    content: {
      paddingHorizontal: 2,
      marginHorizontal: 0,
    },
    contentTitle: {
      fontSize: fontSize,
    },
    icon: {
      marginHorizontal: 2,
      paddingHorizontal: 2,
    }
  });

  return (
    <Appbar.Header style={styles.top}>
      <Menu
        visible={menuVisible}
        onDismiss={toggleMenu}
        anchor={
          <Appbar.Action
            icon="bars"
            size={36}
            style={styles.icon}
            color="white"
            onPress={() => toggleMenu()} />
        }
      >
        <Menu.Item
          icon={menuIcon('home')}
          title="Home"
          onPress={() => onMenuItemSelect('Home')}
        />
        <Menu.Item
          icon={menuIcon('briefcase')}
          title="Experience"
          onPress={() => onMenuItemSelect('Experience')}
        />
        <Menu.Item
          icon={menuIcon('graduation-cap')}
          title="Education"
          onPress={() => onMenuItemSelect('Education')}
        />
        <Menu.Item
          icon={menuIcon('comments')}
          title="Contact"
          onPress={() => onMenuItemSelect('Contact')}
        />
      </Menu>
      <Appbar.Content
       title="Daniel Burkhardt"
       titleStyle={styles.contentTitle}
       style={styles.content}
      />
      <Appbar.Action
        icon="linkedin-square"
        size={48}
        style={styles.icon}
        onPress={() => openBrowser()}
      />
    </Appbar.Header>
  );
}

export default NavBar