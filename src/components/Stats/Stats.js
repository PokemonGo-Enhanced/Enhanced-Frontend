import React, { PropTypes } from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import Radium from 'radium';

const TypeToColor = {
  STA: 'green',
  ATK: 'red',
  DEF: 'blue',
  LVL: 'grey'
};

export const Stats = ({ type, max, current }) => (
  <div style={styles.container}>
    <div style={styles.type}>{type}</div>
    <div style={styles.progressContainer}>
      <LinearProgress
        style={styles.progress}
        mode="determinate"
        value={current}
        max={max}
        color={TypeToColor[type]}
      />
    </div>
  </div>
);

Stats.propTypes = {
  current: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  type: PropTypes.oneOf(Object.keys(TypeToColor))
};

Stats.defaultProps = {
  current: 0,
  max: 15
};

const styles = {
  type: {
    width: '30px',
    flex: '0 0 30px',
    color: '#999',
    fontSize: '12px',
    lineHeight: '18px'
  },
  progressContainer: {
    flex: '1 1 100%'
  },
  progress: {
    height: 10
  },
  container: {
    display: 'flex',
    alignItems: 'center'
  }
};

export default Radium(Stats);
