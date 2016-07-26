import React, { PropTypes } from 'react';
import Radium from 'radium';
import MenuItem from 'material-ui/MenuItem';
import IndexLink from 'react-router/lib/IndexLink';
import InlineSVG from 'svg-inline-react';
import withRouter from 'react-router/lib/withRouter';

const MenuItemLink = ({ to, style, icon, router, ...props }) => {
  const isActive = router.isActive(to, true);

  return (
    <IndexLink key="link" to={to} style={styles.link} activeStyle={styles.activeLink}>
      <MenuItem
        {...props}
        key="menu"
        style={{ ...styles.menu, ...style }}
        desktop
        innerDivStyle={styles.innerDivStyle}
      >
        <InlineSVG src={icon} style={{ ...styles.icon, ...(isActive && styles.iconActive) }} />
      </MenuItem>
    </IndexLink>
  );
};

MenuItemLink.propTypes = {
  to: PropTypes.string.isRequired,
  style: PropTypes.object,
  router: PropTypes.object.isRequired,
  icon: PropTypes.node.isRequired
};

const styles = {
  link: {
    display: 'block',
    margin: '10px 15px',
    background: '#21252D',
    borderRadius: '5px',
    ':hover': {
      background: '#39E1BF'
    }
  },
  activeLink: {
    background: '#39E1BF'
  },
  menu: {
    padding: 0
  },
  icon: {
    fill: '#A8AEB9'
  },
  iconActive: {
    fill: '#ffffff'
  },
  innerDivStyle: {
    padding: '10px',
    width: '40px',
    height: '40px',
    lineHeight: '20px',
    boxSizing: 'border-box'
  }
};

export default Radium(withRouter(MenuItemLink));
