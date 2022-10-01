import React from 'react';
import PropTypes from 'prop-types';
import { GalleryIteItem } from 'components/ImageGalleryItem/StyledImageGalleryItem ';
export default function ImageGalleryItem({
  webformatURL,
  id,
  tag,
  largeImageURL,
  onClick,
}) {
  return (
    <GalleryIteItem>
      <img
        src={webformatURL}
        alt={tag}
        onClick={() => onClick(largeImageURL)}
      />
    </GalleryIteItem>
  );
}

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number,
  webformatURL: PropTypes.string.isRequired,
  tag: PropTypes.string,
  largeImageURL: PropTypes.string.isRequired,
};
