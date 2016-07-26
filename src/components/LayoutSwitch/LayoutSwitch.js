import React, { PropTypes } from 'react';
import Radium from 'radium';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import InlineSVG from 'svg-inline-react';
import SmallGrid from '../../../assets/icons/small-grid.svg';
import LargeGrid from '../../../assets/icons/large-grid.svg';
import ListGrid from '../../../assets/icons/list.svg';

const LayoutSwitch = ({ selectLayout, value }) => (
  <div style={styles.root} >
    <RadioButtonGroup name="layout" onChange={selectLayout} valueSelected={value}>
      <RadioButton
        value="wide"
        style={styles.radioButton}
        checkedIcon={<InlineSVG src={LargeGrid} />}
        uncheckedIcon={<InlineSVG src={LargeGrid} />}
      />

      <RadioButton
        value="compact"
        style={styles.radioButton}
        checkedIcon={<InlineSVG src={SmallGrid} />}
        uncheckedIcon={<InlineSVG src={SmallGrid} />}
      />

      <RadioButton
        value="detailed"
        style={styles.radioButton}
        checkedIcon={<InlineSVG src={ListGrid} />}
        uncheckedIcon={<InlineSVG src={ListGrid} />}
      />
    </RadioButtonGroup>
  </div>
);

LayoutSwitch.propTypes = {
  selectLayout: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

const styles = {
  root: {

  },
  radioButton: {
    fill: 'black'
  }
};

export default Radium(LayoutSwitch);
