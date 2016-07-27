import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import pure from 'recompose/pure';

export const ConfirmationModal = ({ question, open, confirm, decline, ...props }) => (
  <Dialog
    title="Confirm your action"
    modal
    open={open}
    actions={[
      <FlatButton label="Cancel" primary onTouchTap={decline} />,
      <FlatButton label="Confirm" secondary onTouchTap={confirm} />
    ]}
    {...props}
  >
    {question}
  </Dialog>
);

ConfirmationModal.propTypes = {
  question: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  confirm: PropTypes.func.isRequired,
  decline: PropTypes.func.isRequired
};

export default pure(ConfirmationModal);
