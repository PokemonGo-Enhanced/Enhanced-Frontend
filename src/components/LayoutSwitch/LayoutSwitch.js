import React, { PropTypes } from 'react';
import Radium from 'radium';
import InlineSVG from 'svg-inline-react';
import SmallGrid from '../../../assets/icons/small-grid.svg';
import LargeGrid from '../../../assets/icons/large-grid.svg';
import ListGrid from '../../../assets/icons/list.svg';
import IconButton from 'material-ui/IconButton';

const LayoutSwitch = ({ setWide, setSmall, setList, value }) => (
  <div style={styles.root}>
    <IconButton
      style={{ ...styles.radioButton, ...(value === 'wide' && styles.active) }}
      onTouchTap={setWide}
    >
      <InlineSVG src={LargeGrid} />
    </IconButton>

    <IconButton
      style={{ ...styles.radioButton, ...(value === 'small' && styles.active) }}
      onTouchTap={setSmall}
    >
      <InlineSVG src={SmallGrid} />
    </IconButton>

    <IconButton
      style={{ ...styles.radioButton, ...(value === 'list' && styles.active) }}
      onTouchTap={setSmall}
    >
      <InlineSVG src={ListGrid} />
    </IconButton>
  </div>
);

LayoutSwitch.propTypes = {
  setWide: PropTypes.func.isRequired,
  setSmall: PropTypes.func.isRequired,
  setList: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

const styles = {
  root: {

  },
  radioButton: {
    fill: 'black'
  },
  active: {

  }
};

export default Radium(LayoutSwitch);
