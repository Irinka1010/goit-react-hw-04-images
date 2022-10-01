import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyled } from 'components/Modal/StyledModal';
const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeydown);
  }
  hendleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  hendeleBackdropClick = ev => {
    if (ev.currentTarget === ev.target) {
      this.props.onClose();
    }
  };

  render() {
    const { bigPicture } = this.props;
    return createPortal(
      <Overlay onClick={this.hendeleBackdropClick}>
        <ModalStyled>
          <img src={bigPicture} alt="" />
        </ModalStyled>
      </Overlay>,
      modalRoot
    );
  }
}
