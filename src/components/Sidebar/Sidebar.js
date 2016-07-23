import React from 'react';
import Radium from 'radium';
import Drawer from 'material-ui/Drawer';
import MenuItemLink from 'components/MenuItemLink';

const Sidebar = () => (
  <Drawer open containerStyle={styles.base}>
    <MenuItemLink to="/">Player</MenuItemLink>
    <MenuItemLink to="/inventory">Inventory</MenuItemLink>
    <MenuItemLink to="/settings">Settings</MenuItemLink>
    <MenuItemLink to="/map">Map</MenuItemLink>
  </Drawer>
);

const styles = {
  base: {
    width: 100
  }
};

export default Radium(Sidebar);
