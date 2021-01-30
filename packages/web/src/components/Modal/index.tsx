import React from 'react';
import ReactModal from 'react-modal';
import { useTheme } from 'styled-components';

import './styles.css';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onRequestClose, children }) => {
  const { colors } = useTheme();

  return (
    <ReactModal
      shouldCloseOnOverlayClick
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      closeTimeoutMS={350}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: colors.white,
          borderRadius: 4,
          padding: 0,
          border: 'none',
          overflow: 'hidden'
        },
        overlay: {
          background: 'rgba(0, 0, 0, 0.5)'
        }
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
