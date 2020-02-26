import React from 'react';
import { Appbar, Menu } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

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

  return (
    <Appbar style={styles.top}>
      <Menu
        visible={menuVisible}
        onDismiss={toggleMenu}
        anchor={
          <Appbar.Action icon="bars" size={36} color="white" onPress={() => toggleMenu()} />
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
          icon={menuIcon('comments')}
          title="Contact"
          onPress={() => onMenuItemSelect('Contact')}
        />
      </Menu>
      <Appbar.Content title="Daniel Burkhardt" titleStyle={styles.content} />
      <Appbar.Action icon="linkedin-square" size={48} onPress={() => openBrowser()} />
    </Appbar>
  );
}

const styles = StyleSheet.create({
  top: {
    minHeight: 96,
  },
  content: {
    fontSize: 48
  }
});

export default NavBar