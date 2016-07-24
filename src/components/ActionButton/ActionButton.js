import React, { PropTypes } from 'react';
import pure from 'recompose/pure';
import FlatButton from 'material-ui/FlatButton';

export const ActionButton = ({ style, label, labelStyle, ...props }) => (
  <FlatButton
    {...props}
    style={{ ...styles.button, ...style }}
    label={label}
    labelStyle={{ ...styles.action, ...labelStyle }}
    backgroundColor="#fff"
    hoverColor="#eee"
  />
);

ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  labelStyle: PropTypes.object
};

const styles = {
  action: {
    fontSize: '10px'
  }
};

export default pure(ActionButton);
