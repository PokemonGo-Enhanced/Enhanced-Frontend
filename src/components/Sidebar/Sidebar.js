import React from 'react';
import Radium from 'radium';
import Drawer from 'material-ui/Drawer';
import MenuItemLink from 'components/MenuItemLink';

const Sidebar = () => (
  <Drawer open containerStyle={styles.base}>
    <div style={styles.separator} />
    <MenuItemLink to="/" icon={require('../../../assets/icons/profile.svg')} />
    <MenuItemLink to="/inventory" icon={require('../../../assets/icons/pokeball.svg')} />
    <MenuItemLink to="/map" icon={require('../../../assets/icons/map.svg')} />
    <MenuItemLink to="/settings" icon={require('../../../assets/icons/settings.svg')} />
  </Drawer>
);

const styles = {
  base: {
    width: 70,
    background: '#2b303b'
  },
  separator: {
    height: 64,
    background: '#272B35',
    marginBottom: '20px'
  }
};

export default Radium(Sidebar);
