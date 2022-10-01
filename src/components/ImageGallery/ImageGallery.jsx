import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from 'components/ImageGallery/StyledImedgeGellery';
import PropTypes from 'prop-types';

export default function ImageGallery({ pictures, onClick }) {
  return (
    <List>
      {pictures.map(({ id, webformatURL, tag, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tag={tag}
          largeImageURL={largeImageURL}
          onClick={onClick}
        />
      ))}
    </List>
  );
}
ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tag: PropTypes.string,
    })
  ),
};
