import React, { PropTypes } from 'react';
import Radium from 'radium';
import InlineSVG from 'svg-inline-react';
import SmallGrid from '../../../assets/icons/small-grid.svg';
import LargeGrid from '../../../assets/icons/large-grid.svg';
import ListGrid from '../../../assets/icons/list.svg';
import IconButton from 'material-ui/IconButton';

const LayoutSwitch = ({ style, setWide, setSmall, setList, value }) => (
  <div style={{ ...styles.root, ...style }}>
    <IconButton
      style={{ ...styles.radioButton, ...(value === 'wide' && styles.active) }}
      iconStyle={styles.adjust}
      onTouchTap={setWide}
    >
      <InlineSVG src={LargeGrid} />
    </IconButton>

    <IconButton
      style={{ ...styles.radioButton, ...(value === 'small' && styles.active) }}
      iconStyle={styles.adjust}
      onTouchTap={setSmall}
    >
      <InlineSVG src={SmallGrid} />
    </IconButton>

    <IconButton
      style={{ ...styles.radioButton, ...(value === 'list' && styles.active) }}
      iconStyle={{ ...styles.adjust, ...styles.adjustList }}
      onTouchTap={setList}
    >
      <InlineSVG src={ListGrid} />
    </IconButton>
  </div>
);

LayoutSwitch.propTypes = {
  setWide: PropTypes.func.isRequired,
  setSmall: PropTypes.func.isRequired,
  setList: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  style: PropTypes.object
};

const styles = {
  root: {

  },
  radioButton: {
    fill: '#5C5C5C',
    borderRadius: '50%',
    border: '1px solid #ECECEC',
    marginLeft: '10px'
  },
  active: {
    background: '#ffffff',
    border: '1px solid #f4f4f4'
  },
  adjust: {
    position: 'relative',
    top: '-1px',
    right: '-1px'
  },
  adjustList: {
    right: 0
  }
};

export default Radium(LayoutSwitch);
