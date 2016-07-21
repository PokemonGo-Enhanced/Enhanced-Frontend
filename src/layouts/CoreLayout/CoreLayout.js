import React, { PropTypes } from 'react';
import Radium, { StyleRoot } from 'radium';
import AppBar from 'material-ui/AppBar';

export const CoreLayout = ({ children }) => (
  <StyleRoot>
    <AppBar showMenuIconButton={false} />
    <section style={styles.content}>
      {children}
    </section>
  </StyleRoot>
);

const styles = {
  content: {
    padding: '20px',
    boxSizing: 'border-box'
  }
};

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Radium(CoreLayout);
