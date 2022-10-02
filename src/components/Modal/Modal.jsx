import { createPortal } from 'react-dom';
import { Overlay, ModalStyled } from 'components/Modal/StyledModal';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
const modalRoot = document.querySelector('#modal-root');

export default function Modal({ url, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', hendleKeydown);
    return () => {
      window.removeEventListener('keydown', hendleKeydown);
    };
  });

  const hendleKeydown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const hendeleBackdropClick = ev => {
    if (ev.currentTarget === ev.target) {
      onClose();
    }
  };
  return createPortal(
    <Overlay onClick={hendeleBackdropClick}>
      <ModalStyled>
        <img src={url} alt="" />
      </ModalStyled>
    </Overlay>,
    modalRoot
  );
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  bigPicture: PropTypes.string.isRequired,
};
