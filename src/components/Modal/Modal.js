import React, { PropTypes } from 'react';
import ConfirmationModal from 'components/ConfirmationModal';
import pure from 'recompose/pure';

// map of existing modals
const MODAL_COMPONENTS = {
  confirm: ConfirmationModal
};

// modal wrapper
export const Modal = ({ modalType, modalProps, opened }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];

  // it contains default props
  return (
    <SpecificModal
      repositionOnUpdate
      {...modalProps}
      open={opened}
    />
  );
};

Modal.propTypes = {
  modalType: PropTypes.string,
  modalProps: PropTypes.object,
  opened: PropTypes.bool
};

export default pure(Modal);
