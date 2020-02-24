import React from 'react';
import { TopNavigation, TopNavigationAction, OverflowMenu, Icon } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native'

const LIIcon = (style) => (
  <Icon 
    {...style}
    name='linkedin-square'
  />
);

const MenuIcon = (style) => (
  <Icon 
    {...style}
    name='bars'
  />
);
const HomeIcon = (style) => (
  <Icon 
    {...style}
    name='home'
  />
);

const NavBar = () => {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const navigation = useNavigation();

  const menuData = [
    {
      title: 'Home',
      icon: HomeIcon,
    }
  ];

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const onMenuItemSelect = (index) => {
    // Handle Item Select
    navigation.navigate(menuData[index].title);

    setMenuVisible(false);
  };

  const renderMenuAction = () => (
    <OverflowMenu
      visible={menuVisible}
      data={menuData}
      onSelect={onMenuItemSelect}
      onBackdropPress={toggleMenu}>
      <TopNavigationAction
        icon={MenuIcon}
        onPress={toggleMenu}
      />
    </OverflowMenu>
  );

  const renderLIAction = () => (
    <TopNavigationAction icon={LIIcon}/>
  );

  return (
    <TopNavigation
      title='Daniel Burkhardt'
      leftControl={renderMenuAction()}
      rightControls={renderLIAction()}
      alignment='center'
    />
  );
}


export default NavBar