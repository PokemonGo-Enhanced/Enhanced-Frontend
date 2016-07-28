import React, { PropTypes } from 'react';
import Radium, { StyleRoot } from 'radium';
import AppBar from 'containers/AppBar';
import Sidebar from 'components/Sidebar';
import Modal from 'containers/Modal';

export const CoreLayout = ({ children }) => (
  <StyleRoot>
    <AppBar />
    <Sidebar />
    <section style={styles.content}>
      {children}
    </section>
    <Modal />
  </StyleRoot>
);

const styles = {
  content: {
    padding: '20px 20px 20px 90px',
    boxSizing: 'border-box'
  }
};

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Radium(CoreLayout);
