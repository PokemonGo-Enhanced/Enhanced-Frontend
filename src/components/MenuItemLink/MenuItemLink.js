import React, { PropTypes } from 'react';
import Radium from 'radium';
import MenuItem from 'material-ui/MenuItem';
import IndexLink from 'react-router/lib/IndexLink';

// wrap with style support
const WrappedMenuItem = Radium(MenuItem);

const MenuItemLink = ({ to, style, ...props }) => (
  <IndexLink to={to} style={styles.link}>
    <WrappedMenuItem {...props} style={[styles.menu, style]} />
  </IndexLink>
);

MenuItemLink.propTypes = {
  to: PropTypes.string.isRequired,
  style: PropTypes.object
};

const styles = {
  link: {

  },
  menu: {

  }
};

export default Radium(MenuItemLink);
