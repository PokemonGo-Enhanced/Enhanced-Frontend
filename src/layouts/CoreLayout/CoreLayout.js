import React, { PropTypes } from 'react';
import Radium, { StyleRoot } from 'radium';
import AppBar from 'material-ui/AppBar';
import Sidebar from 'components/Sidebar';
import Modal from 'containers/Modal';

export const CoreLayout = ({ children }) => (
  <StyleRoot>
    <AppBar showMenuIconButton={false} />
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
