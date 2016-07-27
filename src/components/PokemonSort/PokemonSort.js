import React, { PropTypes } from 'react';
import Radium from 'radium';
import InlineSVG from 'svg-inline-react';

// some MUI components
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

// import icons
import RecentIcon from '../../../assets/icons/time.svg';
import FavoriteIcon from '../../../assets/icons/favorite.svg';

// Recent
// Favorite
// Number
// HP
// Name
// Combat Power
const PokemonSort = ({ style, setSort, sortBy }) => (
  <div style={{ ...styles.root, ...style }}>
    <DropDownMenu
      value={sortBy}
      onChange={setSort}
      iconStyle={styles.iconStyle}
      labelStyle={styles.dropdown}
      underlineStyle={styles.underlineStyle}
    >
      <MenuItem
        value="recent"
        primaryText={<span><InlineSVG src={RecentIcon} style={styles.icon} />Recent</span>}
      />
      <MenuItem
        value="favorite"
        primaryText={<span><InlineSVG src={FavoriteIcon} style={styles.icon} />Favorite</span>}
      />
      <MenuItem
        value="number"
        primaryText="# Number"
      />
      <MenuItem
        value="hp"
        primaryText="HP"
      />
      <MenuItem
        value="name"
        primaryText="A-Z Name"
      />
      <MenuItem
        value="cp"
        primaryText="Combat Power"
      />
    </DropDownMenu>
  </div>
);

PokemonSort.propTypes = {
  style: PropTypes.object,
  sortBy: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired
};

const styles = {
  root: {
    height: '35px'
  },
  dropdown: {
    paddingLeft: '20px',
    background: '#fff',
    lineHeight: '35px'
  },
  iconStyle: {
    top: '6px',
    right: '10px'
  },
  underlineStyle: {
    display: 'none'
  },
  icon: {
    width: '14px',
    height: '14px',
    display: 'inline-block',
    marginRight: '10px',
    position: 'relative',
    top: '1px'
  }
};

export default Radium(PokemonSort);
