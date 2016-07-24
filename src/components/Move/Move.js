import React, { PropTypes } from 'react';
import Radium from 'radium';

// TODO: incorporate charge
export const Move = ({ style, prettyName, power, type, charge }) => (
  <div style={[styles.container, style]}>
    <div style={styles.name}>{prettyName}</div>
    <div style={styles.powerContainer}>
      <span style={styles.power}>{power}</span>
      {/* TODO: add normal icon when they are available */}
      <span style={styles.powerType}></span>
    </div>
  </div>
);

Move.propTypes = {
  prettyName: PropTypes.string.isRequired,
  power: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  charge: PropTypes.number.isRequired,
  style: PropTypes.object
};

Move.defaultProps = {

};

const styles = {
  container: {
    border: '1px solid #eee',
    background: '#eee',
    whiteSpace: 'nowrap'
  },
  name: {
    display: 'inline-block',
    background: '#fff',
    width: '75%',
    color: '#666',
    fontSize: '12px',
    padding: '5px'
  },
  powerContainer: {
    display: 'inline-block',
    width: '25%',
    textAlign: 'center',
    lineHeight: '18px',
    boxSizing: 'border-box'
  },
  power: {
    fontWeight: 600,
    fontSize: '14px',
    verticalAlign: 'middle',
    display: 'inline-block'
  },
  powerType: {

  }
};

export default Radium(Move);
