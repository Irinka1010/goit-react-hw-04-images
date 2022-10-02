import React from 'react';
import PropTypes from 'prop-types';
import { GalleryIteItem } from 'components/ImageGalleryItem/StyledImageGalleryItem ';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';
export default function ImageGalleryItem({
  webformatURL,
  id,
  tag,
  largeImageURL,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <GalleryIteItem>
      <img src={webformatURL} alt={tag} onClick={() => setModalOpen(true)} />
      {modalOpen && (
        <Modal url={largeImageURL} onClose={() => setModalOpen(false)} />
      )}
    </GalleryIteItem>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string.isRequired,
  tag: PropTypes.string,
  largeImageURL: PropTypes.string.isRequired,
};
